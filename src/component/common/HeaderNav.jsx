import React from "react";

function HeaderNav() {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <a href="">
              <img
                style={{ width: 150, height: 70 }}
                src="./image/MODAL PLANE (2) (1)_preview_rev_1.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              Hà Nội <i className="fa-solid fa-chevron-down" />
            </a>
          </li>
          <li>
            <input placeholder="Bạn tìm gì" type="text" />
            <i className="fa-solid fa-magnifying-glass" />
          </li>
          <li>
            <a href="">
              <button>
                <i className="fa-solid fa-cart-shopping" /> Giỏ hàng
              </button>
            </a>
          </li>
          <li>
            <a href="">Trang chủ</a>
          </li>
          <li>
            <a href="">Sản phẩm</a>
          </li>
          <li>
            <a href="">Liên hệ</a>
          </li>
          <li>
            <a href="">Đăng kí</a>
          </li>
          <li>
            <a href="">Đăng nhập</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
