import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

function FormLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("email chưa đúng định dạng")
        .required("Không được để trống"),

      password: Yup.string()
        .min(8, "Nhập nhiều hơn 8 kí tự")
        .required("Không được để trống"),
    }),

    onSubmit: (values) => {
      toast.success("Đăng kí thành công");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} method="post">
      <div className="text-message container-message" />
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
    

      {/* Phần button đăng kí */}
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-fill-out btn-block btn-signup">
          Login
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
