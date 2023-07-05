import React, { Component } from 'react'
import Product from './product'

export default class ProductList extends Component {

  renderListProduct = () => {
    const { listProduct, getDetailProduct, getAddCart} = this.props;
    return listProduct.map((product) => {
      return <Product key= {product.id} product = {product} getDetailProduct = {getDetailProduct} getAddCart = {getAddCart}/>
    });
  }
  render() {
    return (
        <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    )
  }
}
