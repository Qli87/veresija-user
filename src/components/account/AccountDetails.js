import React from 'react'; 
import { withRouter } from 'react-router-dom'
import  { Translate  } from 'react-localize-redux'


class AccountDetails extends React.Component {
    constructor(props) {
        super(props)
        this.backClick = this.backClick.bind(this)
    }

    componentDidMount() {
        this.props.getDetails(parseInt(this.props.account.id))
    }

    backClick() {
        let path = '/listaZaduzenja'
        this.props.history.push(path)
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-9 offset-1 col-md-12 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                                    <div className="nav-tabs-navigation">
                                        <div className="nav-tabs-wrapper">
                                            <ul className="nav">
                                                <li className="nav-item">  
                                                    <a className="nav-link">
                                                        <i className="material-icons cursorTable" title="Nazad" onClick={this.backClick}>keyboard_backspace</i>
                                                        <i className="material-icons p-1 ml-3">access_time</i> <Translate id="accoutDetails"></Translate>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="card-body" >
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label name="description">
                                                    <Translate id="nameTbl"></Translate>
                                                </label>
                                                <textarea className="form-control" rows="1" value={this.props.accountDetails.name || ""} disabled></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-6">
                                            <div className="form-group">
                                                <label name="description">
                                                    <Translate id="productDetails"></Translate>
                                                </label>
                                                <textarea className="form-control" rows="1" name="description" value={this.props.accountDetails.productDetails} disabled></textarea> 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="price">
                                                <Translate id="productPrice"></Translate>
                                            </label>
                                            <textarea rows="1" className="form-control" name="price" min="0" value={this.props.accountDetails.totalDebit} disabled></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="nmbPay"></Translate>
                                            </label>
                                            <textarea className="form-control" rows="1" min="0" value={this.props.accountDetails.numberOfPayment} disabled></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="payAmmount"></Translate>
                                            </label>
                                            <textarea type="number" className="form-control" rows="1" min="0" value= {this.props.accountDetails.monthlyDebit} disabled></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="payStart"></Translate>
                                            </label>
                                                <textarea type="text" className="form-control" rows="1" min="0" value={this.props.accountDetails.startedPayment} disabled></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="nextPayment"></Translate>
                                            </label>
                                                <textarea type="text" className="form-control" rows="1" min="0" value={this.props.accountDetails.nextPayment} disabled></textarea>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AccountDetails)