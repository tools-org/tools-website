import { AntdRegistry } from "@ant-design/nextjs-registry";
import Layout from "@/layouts";

export const metadata = {
  title: "吐司工具",
  description: "吐司工具",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <AntdRegistry>{children}</AntdRegistry>
        </Layout>
      </body>
    </html>
  );
}
