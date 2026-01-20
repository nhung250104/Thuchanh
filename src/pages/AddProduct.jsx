import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../api/ProductApi";
import "./AddProduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !description) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    const newProduct = {
      name,
      price: Number(price),
      description,
    };

    try {
      await addProduct(newProduct);
      alert("Thêm sản phẩm thành công!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Thêm thất bại!");
    }
  };

  return (
  <div className="add-container">
    <h2>Thêm sản phẩm</h2>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tên sản phẩm</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Giá</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Mô tả</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="btn-group">
        <button type="submit" className="btn-add">Thêm</button>
        <button type="button" className="btn-back" onClick={() => navigate("/")}>
          Trở lại
        </button>
      </div>
    </form>
  </div>
);
}

export default AddProduct;
