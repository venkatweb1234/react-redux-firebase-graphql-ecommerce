import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./products.style.scss";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import ProductDest from "./Product/productdestru.comp";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);
  const { data, queryDoc, isLastPage } = products;

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    );
  }
  return (
    <div className="products">
      <h1>Browse Products</h1>
      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === "undefined"
          )
            return null;
          // pass the values to product component....
          const configProductData = {
            productThumbnail,
            productName,
            productPrice,
          };
          return <ProductDest {...configProductData} />;
        })}
      </div>
    </div>
  );
};

export default ProductResults;
