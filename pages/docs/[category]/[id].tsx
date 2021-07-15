import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FC } from 'react';

const SubDocPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  return <div>{JSON.stringify(props)}</div>;
};

export default SubDocPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params);
  return {
    props: {
      params: ctx.params,
    },
  };
};
