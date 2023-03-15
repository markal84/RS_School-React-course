import React, { Component } from 'react';
import IProduct from '../types/Product';
import Card from './Card';

interface IProductsState {
  products: IProduct[];
  error: boolean;
}

export default class CardsList extends Component<IProductsState> {
  state: IProductsState = {
    products: [],
    error: false,
  };

  query =
    'https://dummyjson.com/products?limit=10&select=title,description,price,rating,brand,category,thumbnail';

  componentDidMount() {
    fetch(this.query)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          products: res.products,
        })
      )
      .catch(() =>
        this.setState({
          error: true,
        })
      );
  }

  render() {
    const { products, error } = this.state;

    return (
      <div>
        {!error && products.map((product) => <Card key={product.id} {...product} />)}
        {error && <div>Someting went wrong</div>}
      </div>
    );
  }
}
