import React from "react"
import { Card } from "react-bootstrap"
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img className="card-img-top text-center" src={product.images} height="190px" width="25%"/>
      </Link>
      <Card.Body className="text-center">
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={product.rating} text = {`${product.numReviews} reviews`}  color={'#f82825'} />
          </div>
        </Card.Text>
        <Card.Text as="h5">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
