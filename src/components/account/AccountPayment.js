import React from 'react';
import { withRouter } from 'react-router-dom'
import  { Translate  } from 'react-localize-redux'
import Select from 'react-select';

class AccountPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            selectedUser: '',
            payment: 0,
            accountId: ''
        }
        this.handleSelectNameChange = this.handleSelectNameChange.bind(this)
        this.handlePayment = this.handlePayment.bind(this)
        this.backClick = this.backClick.bind(this)
        this.paymentFn = this.paymentFn.bind(this)
    }

    componentDidMount() {
        this.props.getHistory(parseInt(this.props.account.id))
        this.props.getUsers()
        this.props.getDetails(parseInt(this.props.account.id))
    }

    componentWillReceiveProps(nextProps) {
        let namesFromApi = nextProps.usersForSelect.map(name => {return {value: name.userId, label: name.name}})
        let _selectedUser = namesFromApi.find(item => item.value === parseInt(nextProps.accountDetails.userId))
        this.setState({
            selectedUser: _selectedUser,
            name: namesFromApi,
            accountId: nextProps.accountDetails.id
        })
    }

    handleSelectNameChange(selectedUser){
        this.setState({selectedUser: selectedUser})
    }

    handlePayment(e) {
        this.setState({
            payment: e.target.value
        })
    }

    backClick() {
        let path = '/listaZaduzenja'
        this.props.history.push(path)
    }

    paymentFn() {
        let paymentInstructions = {
            accountId: parseInt(this.props.account.id),
            userId: parseInt(this.state.selectedUser.value),
            paymentAmount: parseFloat(this.state.payment)
        }
        this.props.accountPayFn(paymentInstructions)
        this.backClick()
    }

    render() {
        return (
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
                                                        <i className="material-icons p-1 ml-3">access_time</i> 
                                                        <Translate id="accountPayment">
                                                        </Translate>: #{this.props.account.id} 
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
                                                <Select 
                                                    value={this.state.selectedUser}
                                                    onChange={this.handleSelectNameChange}
                                                    options={this.state.name} 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-sm-6">
                                            <div className="form-group">
                                                <label name="description">
                                                    <Translate id="productDetails"></Translate>
                                                </label>
                                                <textarea className="form-control" rows="1" 
                                                value={this.props.accountDetails.productDetails} disabled></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-sm-12">
                                            <div className="form-group">
                                            <label name="price">
                                                <Translate id="paymentTbl"></Translate>
                                            </label>
                                            <input type="number" className="form-control" min="0"
                                                value={this.state.payment}
                                                onChange={this.handlePayment}>
                                             </input>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="btn btn-primary btn-sm" onClick={this.paymentFn}>
                                            <Translate id="saveBtn"></Translate>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AccountPayment)