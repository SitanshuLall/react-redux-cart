import React from "react";
import Alert from 'react-bootstrap/Alert';
import {useSelector} from 'react-redux';
import { selectCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const items = useSelector(selectCart);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <Alert variant="success">
      <Alert.Heading>
        Total Items: {items.length}  (Rs. {total})/-
      </Alert.Heading>
    </Alert>
  );
};

export default Cart;
