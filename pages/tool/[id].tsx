import Head from "next/head";
import type { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
import Card1 from "@/components/Card1";

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          id: "0",
        },
      },
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }: any) {
  return {
    props: params,
  };
}

export default function Tool(props: any) {
  const router = useRouter();
  console.log("router: %j", router);

  console.log(props);

  // 组件动态生成

  const Component = dynamic(
    () => import(`@/components/Card${router.query.id}`)
  );

  return (
    <>
      <Layout>
        <Head>
          <title>工具1</title>
          <meta name="description" content="吐司工具、常用工具、开发工具" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        工具内容
        <Component />
      </Layout>
    </>
  );
}
