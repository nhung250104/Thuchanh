import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/ProductApi";
import "./ProductList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      await deleteProduct(id);
      loadData();
    }
  };

    return (
    <div className="container">
        <div className="title">Danh sách sản phẩm</div>

        <Link to="/add" className="btn-add">
        + Thêm mới
        </Link>

        <table className="table">
        <thead>
            <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Giá</th>
            <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            {products.map((p, index) => (
            <tr key={p.id}>
                <td>{index + 1}</td>
                <td>
                <Link to={`/detail/${p.id}`} className="link-name">
                    {p.name}
                </Link>
                </td>
                <td>{p.description}</td>
                <td>{p.price.toLocaleString()} đ</td>
                <td>
                <Link to={`/edit/${p.id}`} className="btn-edit">
                    Sửa
                </Link>
                <button
                    className="btn-delete"
                    onClick={() => handleDelete(p.id)}
                >
                    Xóa
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
}
