import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import "./globals.css";

export const metadata = {
  title: "Hệ thống quản lý ERP",
  description: "Quản lý kho, nhân sự, chấm công",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        {/* AntdRegistry: Đảm bảo styles của Ant Design hoạt động với App Router */}
        <AntdRegistry>
          {/* ConfigProvider: Cấu hình theme và ngôn ngữ cho toàn bộ app */}
          <ConfigProvider
            locale={viVN} // Chuyển sang tiếng Việt
            theme={{
              token: {
                colorPrimary: "#52c41a", // Màu chủ đạo
                borderRadius: 6,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
