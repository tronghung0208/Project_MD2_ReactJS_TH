import React from "react";
import "./register.css";

import FormRegister from "./FormRegister";
import HeaderNav from "../common/HeaderNav";
import Footer from "../common/Footer";

function Register() {
  return (
    <>
      {/* START HEADER */}
      <HeaderNav />
      {/* END HEADER */}

      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START LOGIN SECTION */}
        <div className="login_register_wrap section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-md-10">
                <div className="login_wrap">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h2>Register</h2>
                    </div>
                    <FormRegister />
                    <div className="form-note text-center">
                      Already have an account? <a href="login.html">Log in</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END LOGIN SECTION */}
      </div>
      {/* END MAIN CONTENT */}
      {/* START FOOTER */}

      {/* END FOOTER */}
      <Footer />
      {/* custom js for signup for Pages */}
    </>
  );
}

export default Register;
