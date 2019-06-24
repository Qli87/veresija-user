import React from 'react';
import Modal from 'react-responsive-modal'
import { withLocalize, Translate } from "react-localize-redux";


class ModalComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    render() {
        // console.log('props in modal:' ,this.props)
        return (
            <Modal open={this.props.showModal} onClose={this.props.shutDownModal}>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons p-1">priority_high</i> 
                                            <Translate id="sure?"></Translate> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <p><Translate id="deleteAccountModal"></Translate> {this.props.account.id}</p>
                        <p><Translate id="nameTbl"></Translate>: {this.props.account.name}</p>
                        <p><Translate id="productDetails"></Translate>: {this.props.account.productDetails}</p>
                    </div>
                    <div style={{'textAlign':'right'}}>
                        <button className="btn btn-danger btn-sm" 
                            onClick={this.props.shutDownModal}>
                                <Translate id="backBtn"></Translate></button>

                        <button className="btn btn-primary btn-sm"  
                            onClick={() => this.props.deleteAccount(this.props.account.id)}> 
                                <Translate id="deleteBtn"></Translate> </button>
                    </div>
                </div>  
            </Modal>
        )
    }
}

export default withLocalize(ModalComponent)
