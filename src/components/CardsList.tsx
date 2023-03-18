import React, { Component } from 'react';
import { IProductsState, IProductProps } from '../types/Product';
import Card from './Card';

export default class CardsList extends Component<IProductProps, IProductsState> {
  state: IProductsState = {
    products: [],
    error: false,
    isLoading: false,
  };

  url =
    'https://dummyjson.com/products?limit=10&select=title,description,price,rating,brand,category,thumbnail';

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(this.url)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          isLoading: false,
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
    const { products, error, isLoading } = this.state;

    return (
      <div className="CardsList">
        {isLoading && <div className="Center Mb-2 Mt-2">Loading products...</div>}
        {!error && !isLoading && products.map((product) => <Card key={product.id} {...product} />)}
        {error && <div className="Center">Someting went wrong</div>}
      </div>
    );
  }
}
