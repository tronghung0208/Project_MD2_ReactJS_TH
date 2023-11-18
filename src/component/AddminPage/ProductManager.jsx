import React from "react";
import "./style.css"

function ProductManager() {
  return (
    <div>
      {/* <Component /> */}
      <div>
        <div className="card-header">
          <h3>Quản Lí Sản Phẩm</h3>
        </div>

        <div className="card-body">
          <div className="form_product_wrapper">
            {/* phan nhap ten san pham */}
            <form action="" className="form-save-product">
              <div className="form_group">
                <label htmlFor="">Tên sản phẩm</label>
                <input
                  type="text"
                  className="form_control_item name"
                  placeholder="Nhập tên sản phẩm"
                />
                <div className="error_message" />
              </div>
              <div className="form_group">
                <label htmlFor="">Danh mục</label>
                <select className="form_control_item category_wrapper_form_select" />
              </div>
              {/* phan nhap ten san pham */}
              {/* phan nhap giá san pham */}
              <div className="form_group">
                <label htmlFor="">Giá sản phẩm</label>
                <input
                  type="text"
                  className="form_control_item price_product"
                  placeholder="Nhập giá sản phẩm"
                />
                <div className="error_message" />
              </div>
              {/* phan nhap giá san pham */}
              {/* Phần nhập ảnh sản phẩm */}
              <div className="form_group">
                <label htmlFor="">Ảnh sản phẩm</label>
                <input
                  type="text"
                  className="form_control_item image"
                  placeholder="Nhập ảnh sản phẩm"
                />
                <div className="error_message" />
              </div>
              {/* Phần nhập ảnh sản phẩm  */}
              {/* Phần nhập mô tả sản phẩm */}
              <div className="form_group">
                <label htmlFor="">Mô tả của sản phẩm</label>
                <textarea
                  rows={6}
                  className="form_control_item description"
                  defaultValue={""}
                />
                <div className="error_message" />
              </div>
              {/*START phần thêm loại sản phẩm */}
              <div className="form-group-radio">
                <input
                  type="radio"
                  defaultValue="new_arrival"
                  name="type_product"
                  className="type_product"
                  defaultChecked=""
                />
                <label htmlFor="">Sản phẩm mới</label>
                <input
                  type="radio"
                  defaultValue="best_seller"
                  name="type_product"
                  className="type_product"
                />
                <label htmlFor="">Sản phẩm bán chạy nhất</label>
                <input
                  type="radio"
                  defaultValue="featured"
                  name="type_product"
                  className="type_product"
                />
                <label htmlFor="">Sản phẩm nổi bật</label>
              </div>
              {/*END phần thêm loại sản phẩm */}
              {/* phần chọn category */}
              <div className="form_group">
                <button className="btn_common btn_save">Lưu lại</button>
              </div>
            </form>
            {/* Phần nhập mô tả sản phẩm  */}
          </div>
        </div>
      </div>
      {/* Phần nhập thông tin sản phẩm */}
      <div className="tital">
        <h2>Danh Sách Sản Phẩm</h2>
      </div>
      {/* phần search theo nam và category */}
      <div className="search-all">
        <div className="search_name_category">
          <input
            className="search_product_name"
            type="text"
            placeholder="Nhập tên"
          />
          <i className="ion-ios-search-strong search-strong_name" />
        </div>
        <div className="search_name_category">
          <input
            className="search_category_name"
            type="text"
            placeholder="Nhập danh mục"
          />
          <i className="ion-ios-search-strong search-strong_category" />
        </div>
      </div>
      {/* phần search theo name và category */}
      <table className="style-table">
        <thead>
          <tr>
            <td>Tên sản phẩm</td>
            <td>Giá</td>
            <td className="image_aline">Ảnh</td>
            <td className="image_aline">Hành động</td>
          </tr>
        </thead>
        <tbody className="save-table" />
      </table>
    </div>
  );
}

export default ProductManager;
