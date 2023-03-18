import React, { Component } from 'react';
import { IProductProps } from '../types/Product';

export default class Card extends Component<IProductProps> {
  constructor(props: IProductProps) {
    super(props);
  }
  render() {
    const { title, description, category, brand, price, rating, thumbnail } = this.props;

    return (
      <div className="CardWrapper">
        <div className="Product-img">
          <img src={thumbnail} alt={`${title} image`}></img>
        </div>
        <div className="Product-info">
          <div className="Product-text">
            <h2>{title}</h2>
            <h3>{brand}</h3>
            <h4>{category}</h4>
            <p>{description}</p>
          </div>
          <div className="Product-price-rating">
            <p>
              ${price} <span>Rating: {rating}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
