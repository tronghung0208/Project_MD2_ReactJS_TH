import React from "react";
import "./UserPage.css";
import "./style.css";

function UserPage() {
  return (
    <div>
      <div className="card-header">
        <h3>Thông Tin Người Dùng</h3>
      </div>
      <form
        method="post"
        name="enq"
        className="form_display_user form_manager_user"
      >
        <div className="row">
          {/* phần tên */}
          <div className="col-md-12 mb-3">
            <label>Tên</label>
            <input
              required=""
              className="form-control form-control_user_name"
              name="dname"
              type="text"
              placeholder="Nhập tên"
            />
            <div className="error_message error-name" />
          </div>
          {/* phần tên */}
          {/* update address */}
          <div className="col-md-12 mb-3">
            <label>Email</label>
            <input
              required=""
              className="form-control form-control_user_email"
              name="email"
              type="email"
              placeholder="Nhập Email"
            />
            <div className="error_message error-name" />
          </div>
          {/* update address */}
          {/* mật khẩu */}
          <div className="col-md-12 mb-3">
            <label>Mật khẩu</label>
            <input
              required=""
              className="form-control form-control_user_password"
              name="password"
              type="text"
              placeholder="Nhập mật khẩu"
            />
            <div className="error_message error-name" />
          </div>
          {/* mật khẩu */}
          {/* lưu lại sửa đổi */}
          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-fill-out save_user_manager"
              name="submit"
              value="Submit"
            >
              Lưu lại
            </button>
          </div>
          {/* lưu lại sửa đổi */}
        </div>
      </form>
      <h3 className="list-user_manager">Danh sách người dùng</h3>
      <table className="style-table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tên</td>
            <td>Email</td>
            <td className="image_aline">Mật khẩu</td>
            <td className="image_aline">Hành động</td>
          </tr>
        </thead>
        <tbody className="save-table_manager">
          <tr>
            <td>dssg</td>
            <td>hung</td>
            <td>020893@gmail</td>
            <td>123456</td>
            <td className="image_aline">
              <button
                data-id="${categories[i].id}"
                className="btn_common btn_edit"
              >
                Edit
              </button>
              <button
                data-id="${categories[i].id}"
                className="btn_common btn_dangger"
              >
                Lock
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
