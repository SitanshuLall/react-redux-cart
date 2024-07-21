import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';
const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", margin: "5px" }}>
      <Card.Img variant="top" src={props.image} alt={props.productName} />
      <Card.Body>
        <Card.Title>{props.productName}</Card.Title>
        <Card.Text>Rs. {props.price}/-</Card.Text>
        <Button onClick={(e) => dispatch(addToCart({ name: props.productName, price: props.price }))} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
