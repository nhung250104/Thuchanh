import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api/ProductApi";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadDetail();
  }, [id]);

  if (!product) return <p style={{ textAlign: "center" }}>Đang tải...</p>;

  return (
    <div className="detail-container">
      <h2>Chi tiết sản phẩm</h2>
      <p><strong>Tên sản phẩm:</strong> {product.name}</p>
      <p><strong>Mô tả:</strong> {product.description}</p>
      <p><strong>Giá:</strong> {product.price.toLocaleString()} đ</p>

      <Link to="/" className="btn-back">Trở lại</Link>
    </div>
  );
}
