import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

function FormRegister() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      date: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Cần nhiều hơn 5 kí tự")
        .max(25, "Không được nhập quá 5 kí tự")
        .required("Không được để trống"),
      email: Yup.string()
        .email("email chưa đúng định dạng")
        .required("Không được để trống"),
      address: Yup.string().required("không được để trống"),
      date: Yup.string().required("không được để trống"),
      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Không được để trống"),
    }),

    onSubmit: (values) => {
      console.log("values", values);
      toast.success("Đăng kí thành công");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <div className="text-message container-message" />
      {/* Phần nhập tên */}
      <div className="form-group mb-3">
        <label htmlFor="">Full name</label>
        <input
          type="text"
          className="form-control name"
          name="name"
          placeholder="Enter Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>
      {/* Phần nhập email */}
      <div className="form-group mb-3">
        <label htmlFor="">Email</label>
        <input
          type="text"
          className="form-control email"
          name="email"
          placeholder="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p style={{ color: "red" }}>{formik.errors.email}</p>
        )}
      </div>

      {/* Phần nhập địa chỉ */}

      <div className="form-group mb-3">
        <label htmlFor="">Address</label>
        <input
          type="text"
          className="form-control email"
          name="address"
          placeholder="Enter Your Address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p style={{ color: "red" }}>{formik.errors.address}</p>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="">Date of birth</label>
        <input
          className="form-control"
          type="date"
          id="dob"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        />
        {formik.errors.date && formik.touched.date && (
          <p style={{ color: "red" }}>{formik.errors.date}</p>
        )}
      </div>

      {/* phần nhập password */}
      <div className="form-group_magin_bottom">
        <div className="form-group mb-3 form-group_password">
          <input
            className="form-control password"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <i className="fas fa-eye-slash toggle_password" />

          {/* icon show hide password */}
        </div>
        {formik.errors.password && formik.touched.password && (
          <p style={{ color: "red" }}>{formik.errors.password}</p>
        )}
      </div>
      {/* Phần nhập Confirm Password */}
      <div className="form-group_magin_bottom">
        <div className="form-group mb-3 form-group_password">
          <input
            className="form-control confirm_password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />

          <i className="fas fa-eye-slash " />
        </div>
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
        )}
      </div>

      <div class="form-group form_group_radio">
        <label for="">Gender</label>
        <div class="content-radio">
          <div class="item">
            <input
              type="radio"
              value="Male"
              id="male"
              name="sex"
              class="gender-radio"
              checked
            />
            <label for="male"> Male</label>
          </div>
          <div class="item">
            <input
              type="radio"
              value="Female"
              id="female"
              name="sex"
              class="gender-radio"
            />
            <label for="female"> Female</label>
          </div>
        </div>
      </div>

      {/* Phần button đăng kí */}
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-fill-out btn-block btn-signup">
          Register
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
