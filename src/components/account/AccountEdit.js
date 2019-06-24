import React from 'react'
import { withRouter } from 'react-router-dom'
import  { Translate  } from 'react-localize-redux'
import Select from 'react-select';


class AccountEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            totalDebit: '',
            monthlyDebit: '',
            numberOfPayment: '',
            startedPayment: '',
            totalForPay: '',
            productDetails: '',
            selectedUser: ''
        }

        this.handleChangeTotalDebit = this.handleChangeTotalDebit.bind(this);
        this.handleChangeMonthlyDebit = this.handleChangeMonthlyDebit.bind(this);
        this.handleChangeNumberOfPayment = this.handleChangeNumberOfPayment.bind(this);
        this.handleChangeStartedPayment = this.handleChangeStartedPayment.bind(this);
        this.handleChangeTotalForPay = this.handleChangeTotalForPay.bind(this);
        this.handleChangeProductDetails = this.handleChangeProductDetails.bind(this);
        this.handleSelectNameChange = this.handleSelectNameChange.bind(this);
        this.backClick = this.backClick.bind(this)
        this.editAccount = this.editAccount.bind(this)
    }

    componentDidMount() {
        this.props.getDetails(parseInt(this.props.account.id))
        this.props.getUsersSelect()
    }
    
    componentWillReceiveProps(nextProps) {
        let namesFromApi = nextProps.usersForSelect.map(name => {return {value: name.userId, label: name.name}})
        let _selectedUser = namesFromApi.find(item => item.value === parseInt(nextProps.accountDetails.userId))
        this.setState({
            selectedUser: _selectedUser,
            name: namesFromApi,
            totalDebit: nextProps.accountDetails.totalDebit,
            monthlyDebit: nextProps.accountDetails.monthlyDebit,
            numberOfPayment: nextProps.accountDetails.numberOfPayment,
            startedPayment: nextProps.accountDetails.startedPayment,
            totalForPay: nextProps.accountDetails.totalForPay,
            productDetails: nextProps.accountDetails.productDetails
        })
    }

    editAccount() {
        let user = {
            name: this.state.selectedUser,
            totalDebit: this.state.totalDebit,
            monthlyDebit: this.state.monthlyDebit,
            numberOfPayment: this.state.numberOfPayment,
            startedPayment: this.state.startedPayment,
            totalForPay: this.state.totalForPay,
            productDetails: this.state.productDetails
        }
        this.props.editAccount(user)
    } 

    handleSelectNameChange(selectedUser){
        this.setState({selectedUser: selectedUser})
    }

    handleChangeTotalDebit(e) {
        this.setState({totalDebit: e.target.value});
    }

    handleChangeMonthlyDebit(e) {
        this.setState({monthlyDebit: e.target.value});
    }

    handleChangeNumberOfPayment(e) {
        this.setState({numberOfPayment: e.target.value});
    }

    handleChangeStartedPayment(e){
        this.setState({startedPayment: e.target.value});
    }

    handleChangeTotalForPay(e){
        this.setState({totalForPay: e.target.value});
    }

    handleChangeProductDetails(e){
        this.setState({productDetails: e.target.value});
    }

    backClick() {
        let path = '/listaZaduzenja'
        this.props.history.push(path)
    }

    render() {
        var totalDebit = parseFloat(this.state.totalDebit);
        var nOfP = parseFloat(this.state.numberOfPayment);
        var mPay = parseFloat(totalDebit/nOfP).toFixed(2)

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
                                                value={this.state.productDetails || ""} 
                                                onChange={this.handleChangeProductDetails}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="price">
                                                <Translate id="productPrice"></Translate>
                                            </label>
                                            <input type="number" className="form-control" min="0" 
                                                value={this.state.totalDebit || ""}
                                                onChange={this.handleChangeTotalDebit} >
                                             </input>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="nmbPay"></Translate>
                                            </label>
                                            <input type="number" className="form-control" min="0" 
                                                value={this.state.numberOfPayment || ""} 
                                                onChange={this.handleChangeNumberOfPayment}></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="payAmmount"></Translate>
                                            </label>
                                            <input type="number" className="form-control" min="0" 
                                                value={mPay} 
                                                onChange={this.handleChangeMonthlyDebit}></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                            <label name="payment">
                                                <Translate id="payStart"></Translate>
                                            </label>
                                            <input className="form-control" type="date" name="bday" max="3000-12-31" min="1000-01-01"
                                                value={this.state.startedPayment || ""}
                                                onChange={this.handleChangeStartedPayment} 
                                                ></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="btn btn-primary btn-sm" onClick={this.editAccount}>
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

export default withRouter(AccountEdit)