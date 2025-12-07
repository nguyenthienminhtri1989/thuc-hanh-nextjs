"use client"; // Đánh dấu đây là client Component

import { Button, Card, Col, Row, Statistic } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";

export default function HomePage() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Chào mừng đến với hệ thống ERP</h1>

      {/* Grid layout: 3 cột */}
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Tổng nhân viên"
              value={112}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Sản phẩm trong kho"
              value={1893}
              prefix={<ShoppingCartOutlined />}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Doanh thu tháng"
              value={234567000}
              prefix={<DollarOutlined />}
              suffix="VND"
            />
          </Card>
        </Col>
      </Row>

      <Button type="primary" style={{ marginTop: "24px" }}>
        Xem chi tiết
      </Button>
    </div>
  );
}
