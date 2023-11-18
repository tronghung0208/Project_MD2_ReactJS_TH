import React from "react";

function ProductItem() {
  return (
    <div className="product-gallery-one-content-product-item">
      <img
        src="./image/mo-hinh-may-bay-quan-su-apache-ah-64-huayi_992d925ddeae43be98d2456b80ee3b8d_1024x1024.webp"
        alt=""
      />
      <div className="product-gallery-one-content-product-item-text">
        <li>
          <button>Thêm vào giỏ hàng</button>
        </li>
        <li>Tên sản phẩm</li>
        <li>online giá rẻ</li>
        <li>
          <a href="">
            250.000 <sup>đ</sup>
          </a>
          <span>-6%</span>
        </li>
        <li>
          150.000 <sup>đ</sup>
        </li>
        <li>Quà tặng kèm</li>
        <li>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </li>
      </div>
    </div>
  );
}

export default ProductItem;
