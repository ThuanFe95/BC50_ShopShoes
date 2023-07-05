import React, { Component } from 'react'

export default class Modal_shoes extends Component {

    renderListCart = () => {
        const { listCart,getQuanlity, getDelete } = this.props;
        return listCart.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img src={product.image} width={50} alt="" />
              </td>
              <td>
                <button onClick={() => {
                  getQuanlity(product.id, false)
                }}>-</button>
    
                {product.soLuong}
    
                <button onClick={() => {
                  getQuanlity(product.id, true)
                }}>+</button>
              </td>
              <td>{product.price}</td>
              <td>{product.price * product.soLuong}</td>
              <td>
                <button className="btn btn-danger" onClick={() => {getDelete(product.id)}}>Delete</button>
              </td>
            </tr>
          )
    
        })
      }


    render() {
        return (
            <div
                className="modal fade"
                id="modelShoes"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modelTitleId"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog"
                    style={{ maxWidth: "1000px" }}
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping Cart</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Quanlity</th>
                                        <th>Price</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderListCart()}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
