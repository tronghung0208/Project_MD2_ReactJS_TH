import React from "react";
import "./style.css"

function CategoriManager() {
  return (
    <div>
      <div className="card-header">
        <h3>Quản Lí Danh Mục</h3>
      </div>
      <div className="card-body">
        <div className="category_wrapper">
          <form>
            {/* phần nhập tên danh mục */}
            <div className="form_group">
              <label htmlFor="">Tên Danh Mục</label>
              <input
                type="text"
                className="form_control_item name-category"
                placeholder="Nhập danh mục"
              />
              <div className="error_message" />
            </div>
            {/* phần nhập tên danh mục */}
            <div className="form_group">
              <button className="btn_common btn_category_save">Lưu Lại</button>
            </div>
          </form>
        </div>
        <div className="title">
          <h2>Danh mục</h2>
        </div>
        <table className="style-table">
          <thead>
            <tr>
              <td>Tên mục</td>
              <td className="image_aline">Actions</td>
            </tr>
          </thead>
          <tbody className="save-category-table" />
        </table>
      </div>
    </div>
  );
}

export default CategoriManager;
