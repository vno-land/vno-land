import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import styles from '../../../styles/Docs.module.css';
import SideBar, { RouteData } from '../../../components/docs/Sidebar';

const routes: RouteData[] = [
  {
    title: 'ssg',
    routes: [
      {
        title: 'Getting Started',
        path: '/docs/ssg/getting-started',
      },
      {
        title: 'Folder Structure',
        path: '/docs/ssg/folder-structure',
      },
      {
        title: 'Routing',
        path: '/docs/ssg/routing',
      },
      {
        title: 'Data Fetching',
        path: '/docs/ssg/data-fetching',
      },
      {
        title: 'Configuration',
        path: '/docs/ssg/configuration',
      },
    ],
  },
];

const SubDocPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1024px', width: '100%' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '240px', flexShrink: 0 }}>
          <SideBar routes={routes} />
        </div>
        <div className={styles.content}>
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default SubDocPage;

interface SubDocPageProps {
  content: string;
}

export const getServerSideProps: GetServerSideProps<SubDocPageProps> = async (
  ctx
) => {
  const dir = path.join(process.cwd(), 'content', 'docs');
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
