import React from "react";
import { Card, Col, Row, Tag, Statistic } from "antd";

const Products: React.FC = () => {
  // Dữ liệu mẫu, sau này sẽ lấy từ database
  const products = [
    {
      id: 1,
      name: "Laptop Lenovo Thinkpad 14",
      code: "SP-001",
      price: 25000000,
      quantity: 15,
      status: "available",
    },
    {
      id: 2,
      name: "Microsoft Surface Laptop 5",
      code: "SP-002",
      price: 28500000,
      quantity: 8,
      status: "low",
    },
    {
      id: 3,
      name: "Dell XPS 13",
      code: "SP-003",
      price: 32000000,
      quantity: 0,
      status: "out",
    },
  ];

  // Hàm hiển thị trạng thái
  const getStatusTag = (status: string) => {
    switch (status) {
      case "available":
        return <Tag color="green">Còn hàng</Tag>;
      case "low":
        return <Tag color="orange">Sắp hết</Tag>;
      case "out":
        return <Tag color="red">Hết hàng</Tag>;
      default:
        return <Tag>Không xác định</Tag>;
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>Danh sách sản phẩm trong kho</h1>

      {/* Grid 3 cột */}
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Card
              title={product.name}
              extra={getStatusTag(product.status)}
              hoverable // Hiệu ứng hover
            >
              <p>
                <strong>Mã: </strong>
                {product.code}
              </p>
              <p>
                <strong>Giá: </strong>
                {product.price} VND
              </p>
              <Statistic
                title="Số lượng tồn kho"
                value={product.quantity}
                suffix="chiếc"
                valueStyle={{
                  color:
                    product.quantity > 10
                      ? "#3f8600"
                      : product.quantity > 0
                      ? "#faad14"
                      : "#cf1322",
                }}
              ></Statistic>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
