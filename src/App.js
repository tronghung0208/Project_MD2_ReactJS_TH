import logo from "./logo.svg";
import "./App.css";
import Register from "./component/Register/Register";
import HomePage from "./component/HomePage/HomePage";
import Login from "./component/Login/Login";
import AdminPage from "./component/AddminPage/AdminPage";
import UserPage from "./component/AddminPage/UserPage";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import { Outlet, Route, Routes } from "react-router-dom";
import ProductManager from "./component/AddminPage/ProductManager";
import AdminIndex from "./component/AddminPage/AdminIndex";
import OderManager from "./component/AddminPage/OderManager";
import CategoriManager from "./component/AddminPage/CategoriManager";
import UserDetail from "./component/AddminPage/UserDetail";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <AdminPage /> */}
      {/* <ProductDetail /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<ProductManager />} />
          <Route path="productManager" element={<ProductManager />} />
          <Route path="usePage" element={<UserPage />} />

          {/* PHẦN ORDER */}
          <Route path="oderManager" element={<OderManager />} />
          {/* PHẦN ORDER */}

          {/* user  */}
          <Route path="usePage" element={<UserPage />} />
          {/* user  */}

          {/* quản lí danh mục sản phẩm */}
          <Route path="categoriManager" element={<CategoriManager />} />
          {/* quản lí danh mục sản phẩm */}

          {/* Phần thêm sửa xóa users */}
          <Route path="userDetail" element={<UserDetail />} />
          {/* Phần thêm sửa xóa users */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
