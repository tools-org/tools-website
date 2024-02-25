import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>吐司工具</title>
          <meta name="description" content="吐司工具、常用工具、开发工具" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        工具内容
      </Layout>
    </>
  );
}
