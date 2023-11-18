import React from "react";
import "./style.css";

function UserDetail() {
  return (
    <di>
      <div className="card-header">
        <h3>Thông Tin Cá Nhân</h3>
      </div>
      <div className="card-body">
        <p>
          Chỉnh sửa thông tin cá nhân <a href="#">Log in instead!</a>
        </p>
        {/* FORM THAY ĐỔI USERS */}
        <form method="post" name="enq" className="form_display_user">
          <div className="row">
            {/* phần update tên */}
            <div className="col-md-12 mb-3">
              <label>
                Display Name
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_name"
                name="dname"
                type="text"
                placeholder="Enter name"
              />
              <div className="error_message error-name" />
            </div>
            {/* phần update tên */}
            {/* update address */}
            <div className="col-md-12 mb-3">
              <label>
                Email Address
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_email"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <div className="error_message error-name" />
            </div>
            {/* update address */}
            {/* mật khẩu cũ */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                Current Password
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_display_current_password"
                name="password"
                type="password"
                placeholder="Enter password"
              />
              <div className="error_message error-name" />
              <i className="fas fa-eye-slash toggle_curent_password" />
            </div>
            {/* mật khẩu cũ */}
            {/* mật khẩu mới */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                New Password
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_new_password"
                name="npassword"
                type="password"
              />
              <div className="error_message error-name" />
              <i className="fas fa-eye-slash toggle_new_password" />
            </div>
            {/* mật khẩu mới */}
            {/* nhập lại mật khẩu mới */}
            <div className="col-md-12 mb-3 form-group_password">
              <label>
                Confirm Password
                <span className="required">*</span>
              </label>
              <input
                required=""
                className="form-control form_new_confirm_password"
                name="cpassword"
                type="password"
              />
              <div className="error_message error-name" />
              <i className="fas fa-eye-slash toggle_new_confirm_password" />
            </div>
            {/* nhập lại mật khẩu mới */}
            {/* lưu lại sửa đổi */}
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-fill-out btn_acound_detail"
                name="submit"
                value="Submit"
              >
                Save
              </button>
            </div>
            {/* lưu lại sửa đổi */}
          </div>
        </form>
        {/* FORM THAY ĐỔI USERS */}
      </div>
    </di>
  );
}

export default UserDetail;
