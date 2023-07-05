import React, { Component } from 'react'
import Modal_shoes from './modal'
import ProductList from './productList'
import data from "./data.json"
import Info from './info'

export default class ShoppingShoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: data,
            productDetail: data[0],
            listCart: [],
        }
    }

    handlDetailProduct = (product) => {
        this.setState({
            productDetail: product,
        })
    }

    _findIndex = (id) => this.state.listCart.findIndex((product) => product.id === id)

    handlAddCart = (product) => {

        const index = this._findIndex(product.id)
        let listCart = [...this.state.listCart];
        if (index !== -1) {
            listCart[index].soLuong += 1;
        } else {
            const productAddCart = {
                id: product.id,
                name: product.name,
                image: product.image,
                soLuong: 1,
                price: product.price,
            }
            listCart.push(productAddCart);
        }
        this.setState({
            listCart,
        })
    }

    handlQuanlity = (id, isPlus) => {
        let listCartClone = [...this.state.listCart];
        const index = this._findIndex(id);
        if (index !== -1) {
          if (isPlus)
            listCartClone[index].soLuong += 1;
          else {
            if (listCartClone[index].soLuong > 1) {
              listCartClone[index].soLuong -= 1;
            }
          }
        }
        this.setState({
          listCart: listCartClone
        })
      }
      handlDelete = (id) => {
        let listCart = [...this.state.listCart];
        const index = this._findIndex(id);
        if (index !== -1) {
          listCart.splice(index, 1);
          this.setState({
            listCart: listCart,
          })
        }
      }
      totalQuanlity = () => {
        return this.state.listCart.reduce((total, product) => total += product.soLuong , 0
        )
      }
    render() {
        const { productDetail, listCart } = this.state;
        return (
            <>
                <div className='container'>
                    <h1 className='text-center'>Shoes Shop</h1>
                    <button
                        className="btn btn-danger"
                        data-toggle="modal"
                        data-target="#modelShoes"
                    >
                        Cart ({this.totalQuanlity()})
                    </button>
                </div>
                <ProductList listProduct={this.state.listProduct} getDetailProduct={this.handlDetailProduct} getAddCart={this.handlAddCart} />
                <Modal_shoes listCart={listCart} getQuanlity = {this.handlQuanlity} getDelete={this.handlDelete}/>\
                <Info productDetail = {productDetail}/>
            </>
        )
    }
}
