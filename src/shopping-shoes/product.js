import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const {product, getDetailProduct, getAddCart} = this.props;
    return (
      <>
        <div className="col-6 col-md-4 my-3">
          <div className="card">
            <img className="card-img-top" src={product.image} />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-title">{product.price} $</h5>
              <button className='btn btn-dark' onClick={() => {getAddCart(product)}}>Add to cart</button>
              <span> </span>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={() => {getDetailProduct(product)}} >
                Info
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
