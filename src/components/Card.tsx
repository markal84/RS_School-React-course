import React, { Component } from 'react';
import IProduct from '../types/Product';

export default class Card extends Component<IProduct> {
  render() {
    const { title, description, category, brand, price, rating, thumbnail } = this.props;

    return (
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{category}</p>
        <p>{brand}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <p>
          <img src={thumbnail} alt={`${title} image`}></img>
        </p>
      </div>
    );
  }
}
