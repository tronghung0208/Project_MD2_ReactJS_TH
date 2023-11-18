import React from "react";
import "./style.css";
// import "../ProductDetail/productDetail.css";
// import UserPage from "./UserPage";
// import ProductManager from "./ProductManager";
// import OderManager from "./OderManager";
// import CategoriManager from "./CategoriManager";
// import UserDetail from "./UserDetail";
import Footer from "../common/Footer";
import HeaderNav from "../common/HeaderNav";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function AdminPage() {
  return (
    <>
      {/* START HEADER */}
      <HeaderNav />
      {/* END HEADER */}
      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START SECTION SHOP */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="dashboard_menu dashboard_menu_click">
                  <ul className="nav nav-tabs flex-column" role="tablist">
                    <li className="nav-item">
                      <Link to="productManager" className="nav-link active">
                        <i className="ti-layout-grid2 active" />
                        Quản Lí Sản Phẩm
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="usePage" className="nav-link">
                        <i className="ti-user" />
                        Quản lí Người Dùng
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="oderManager" className="nav-link">
                        <i class="ti-shopping-cart-full"></i>Quản Lí Đơn Hàng
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="categoriManager" className="nav-link">
                        <i className="ti-folder" />
                        Quản Lí Danh Mục
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="userDetail" className="nav-link">
                        <i className="ti-id-badge" />
                        Chi Tiết Tài Khoản
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <a href="#" className="nav-link">
                        <i className="ti-lock " />
                        Đăng Xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-md-8">
                <div className="tab-content dashboard_content">
                  <Outlet />

                  {/* <ProductManager /> */}
                  <Routes>{/* Phan quan li san pham */}</Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END SECTION SHOP */}
      </div>
      {/* END MAIN CONTENT */}
      {/* START FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  );
}

export default AdminPage;
