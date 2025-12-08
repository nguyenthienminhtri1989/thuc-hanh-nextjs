import React from "react";
import { Card, Descriptions, Tag } from "antd";

const Products: React.FC = () => (
  <div style={{ margin: "24px" }}>
    <h1>Danh sách sản phẩm</h1>
    <Card
      title="Laptop Lenovo Thinkpad"
      style={{ width: 400, marginBottom: 16 }}
    >
      <Descriptions column={1}>
        <Descriptions.Item label="Mã sản phẩm">SP-001</Descriptions.Item>
        <Descriptions.Item label="Giá">25,000,000 VNĐ</Descriptions.Item>
        <Descriptions.Item label="Số lượng">15</Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color="green">Còn hàng</Tag>
        </Descriptions.Item>
      </Descriptions>
    </Card>

    <Card
      title="Microsoft Surface Laptop 5"
      style={{ width: 400, marginBottom: 16 }}
    >
      <Descriptions column={1}>
        <Descriptions.Item label="Mã sản phẩm">MS-002</Descriptions.Item>
        <Descriptions.Item label="Giá">28,500,000 VND</Descriptions.Item>
        <Descriptions.Item label="Số lượng">8</Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color="orange">Sắp hết</Tag>
        </Descriptions.Item>
      </Descriptions>
    </Card>

    <Card title="Dell XPS 13" style={{ width: 400 }}>
      <Descriptions column={1}>
        <Descriptions.Item label="Mã sản phẩm">DL-003</Descriptions.Item>
        <Descriptions.Item label="Giá">32,000,000 VND</Descriptions.Item>
        <Descriptions.Item label="Số lượng">0</Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          <Tag color="red">Hết hàng</Tag>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  </div>
);

export default Products;
