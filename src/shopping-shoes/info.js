import React, { Component } from 'react'

export default class Info extends Component {

    render() {
    const { productDetail } = this.props;
        return (
            <div
                className="modal fade"
                id="myModal"
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
                        <h3 style={{color: "red"}}>Thông tin</h3>
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
                                <tbody>

                                    <tr>
                                        <td><img src={productDetail.image} width={450} alt="" /></td>
                                        <td>
                                            <h2 className='text-center'style={{color: "red"}}>{productDetail.name}</h2>
                                            <h5 style={{color : "blue"}}>{productDetail.description}</h5>
                                            <h5 style={{color : "blue"}}>{productDetail.shortDescription}</h5>
                                            <h5 style={{color : "black"}}>Price : {productDetail.price}$</h5>
                                            <h5 style={{color : "#8B7D6B"}}>Quanlity : {productDetail.quantity}</h5>

                                        </td>
                                    </tr>
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
