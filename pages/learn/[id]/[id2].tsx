import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import styles from '../../../styles/Docs.module.css';
import Section from '../../../components/Layout/Section';
import SideBar, { RouteData } from '../../../components/docs/Sidebar';

const routes: RouteData[] = [
  {
    title: 'SSG',
    routes: [
      {
        title: 'Create A Vno App',
        path: '/learn/ssg/create-vno-app',
      },
      {
        title: 'Building Pages',
        path: '/learn/ssg/building-pages',
      },
      {
        title: 'Adding Data',
        path: '/learn/ssg/adding-data',
      },
      {
        title: 'Cleaning Up',
        path: '/learn/ssg/cleaning-up',
      },
      {
        title: 'Generating Files',
        path: '/learn/ssg/generation',
      }
    ],
  },
];

const SubDocPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return (
    <Section sectionMinHeight="800px"> 
      <div style={{ maxWidth: '1080px', width: '100%', height: '100%' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '240px', flexShrink: 0 }}>
            <SideBar routes={routes} />
          </div>
          <div className={styles.content}>
            <ReactMarkdown>{props.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SubDocPage;

interface SubDocPageProps {
  content: string;
}

export const getServerSideProps: GetServerSideProps<SubDocPageProps> = async (
  ctx
) => {
  const dir = path.join(process.cwd(), 'content', 'learn');
  const content = fs.readFileSync(
    path.join(
      dir,
      ctx.params?.id as string,
      (ctx.params?.id2 as string) + '.md'
    ),
    'utf8'
  );
  return {
    props: {
      content,
    },
  };
};
