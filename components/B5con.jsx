import React from 'react';

class Product extends React.Component {
  render() {
    const { id, name, price, quantity } = this.props.product;

    return (
      <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}

export default Product;
