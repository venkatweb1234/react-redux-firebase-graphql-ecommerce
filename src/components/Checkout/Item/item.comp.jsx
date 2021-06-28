import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeCartItem,
  reduceCartItem,
} from "./../../../redux/Cart/cart.actions";
import "./item.style.scss";

const Item = (product) => {
  const dispatch = useDispatch();
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID,
      })
    );
  };

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceCartItem = (product) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td>{productName}</td>
          <td>
            <span
              className="cartBtn zindexspan"
              onClick={() => handleReduceCartItem(product)}
            >{`<`}</span>
            <span>{quantity}</span>
            <span
              onClick={() => handleAddProduct(product)}
              className="zindexspan"
            >{`>`}</span>
          </td>
          <td>£{productPrice}</td>
          <td align="center">
            <span
              className="cartBtn"
              onClick={() => handleRemoveCartItem(documentID)}
            >
              X
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Item;
