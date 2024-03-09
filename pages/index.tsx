import Head from "next/head";
import Layout from "@/components/Layout";

export const getStaticProps = async () => {
  // 获取菜单和首页数据
  return {
    props: {
      data: {
        myTools: [],
      },
    },
  };
};

export default function Home(props: any) {
  console.log("props", props);
  return (
    <>
      <Layout>
        <Head>
          <title>吐司工具</title>
          <meta name="description" content="吐司工具、常用工具、开发工具" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        首页内容
      </Layout>
    </>
  );
}
