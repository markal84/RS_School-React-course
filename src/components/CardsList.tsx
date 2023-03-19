import { Component } from 'react';
import { IProductsState, IProductProps } from '../types/Product';
import Card from './Card';
import { getData } from '../api/getData';

export default class CardsList extends Component<IProductProps, IProductsState> {
  state: IProductsState = {
    products: [],
    error: false,
    isLoading: false,
  };

  fetchData = () => {
    getData()
      .then((data) => {
        this.setState({
          isLoading: false,
          products: data.products as IProductProps[],
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchData();
  }

  render() {
    const { products, error, isLoading } = this.state;

    return (
      <div className="CardsList">
        {isLoading && <div className="Center Mb-2 Mt-2">Loading products...</div>}
        {!error && !isLoading && products.map((product) => <Card key={product.id} {...product} />)}
        {error && <div className="Center">Ups... Someting went wrong</div>}
      </div>
    );
  }
}
