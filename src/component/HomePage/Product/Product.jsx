import React from "react";
import ProductItem from "./ProductItem";

function Product() {
  return (
    <section style={{ marginBottom: "20px" }} className="product-gallery-one">
      <div className="container">
        <div className="product-gallery-one-content">
          <div className="product-gallery-one-content-title">
            <h2>Sản phẩm nổi bật nhất</h2>
            <ul>
              <li>Danh mục 1</li>
              <li>Danh mục 2</li>
              <li>Danh mục 3</li>
              <li>Danh mục 4</li>
            </ul>
          </div>
          <div className="product-gallery-one-content-product">
            {/* start------------------ item product------------ */}
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />

            {/* end------------------ item product------------ */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
