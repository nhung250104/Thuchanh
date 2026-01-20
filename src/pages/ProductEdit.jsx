import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../api/ProductApi";
import "./ProductEdit.css";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: ""
  });

  useEffect(() => {
    getProductById(id).then(res => {
      setProduct(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    alert("Cập nhật thành công!");
    navigate("/products");
    };

  return (
    <div className="edit-container">
      <div className="edit-header">Sửa sản phẩm</div>

      <form className="edit-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên sản phẩm</label>
          <input
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Giá</label>
          <input
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mô tả</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="btn-group">
          <button className="btn-update">Sửa</button>
          <button type="button" onClick={() => navigate("/products")} className="btn-back">
            Trở lại
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;
