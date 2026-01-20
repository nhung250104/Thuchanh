import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import ProductEdit from "./pages/ProductEdit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
