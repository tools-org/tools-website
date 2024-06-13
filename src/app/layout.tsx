import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "@/layouts";

export const metadata = {
  title: "吐司工具",
  description: "吐司工具",
};

import { loader } from "@monaco-editor/react";

loader.config({ paths: { vs: "/vs" } });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
      </head>
      <body>
        <Layout>
          <AntdRegistry>{children}</AntdRegistry>
        </Layout>
      </body>
    </html>
  );
}
