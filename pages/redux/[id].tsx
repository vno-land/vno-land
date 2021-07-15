import Link from 'next/link';
import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import Page from '../../components/redux/page';
import { initState } from '../../store';

const length = 5;

export default function Page1(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <h1>Page {props.id}</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {Array.from({ length }, (_, i) => i)
          .filter((i) => i.toString() != props.id)
          .map((i) => (
            <Link key={i} href={`/redux/${i}`}>{`Go to page ${i}`}</Link>
          ))}
      </div>

      <Page name={props.id} />
    </div>
  );
}

// export function getStaticProps(ctx: GetStaticPropsContext) {
//   return {
//     props: {
//       id: ctx.params?.id as string,
//       initialReduxState: initState,
//     },
//   };
// }

// export function getStaticPaths() {
//   const paths = Array.from({ length }, (_, i) => ({
//     params: { id: i.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      id: ctx.params?.id as string,
      initialReduxState: initState,
    },
  };
}
