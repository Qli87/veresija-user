import React from 'react';
import { withRouter } from 'react-router-dom'
import Select from 'react-select';
import { Translate } from 'react-localize-redux';

class AccountAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            selectedUser: '',
            productDetails: '',
            totalDebit: 0,
            numberOfPayment: 1,
            startedPayment: '',
            payDebit: 0
          }
        this.handleSelectUser = this.handleSelectUser.bind(this)
        this.handleChangeDetails = this.handleChangeDetails.bind(this)
        this.handleChangeTotalDebit = this.handleChangeTotalDebit.bind(this)
        this.handleChangeNumberOfPayment = this.handleChangeNumberOfPayment.bind(this)
        this.handleChangeStartedPayment = this.handleChangeStartedPayment.bind(this)
        this.handleChangePayDebit = this.handleChangePayDebit.bind(this)
        this.backClick = this.backClick.bind(this)
        this.addAccount = this.addAccount.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    componentWillReceiveProps(nextProps) {
        let namesFromApi = nextProps.usersForSelect.map(name => {return {value: name.userId, label: name.name}})
        this.setState({
            users: namesFromApi
          })
    }

    addAccount() {
        let account = {
            user: this.state.selectedUser,
            productDetails: this.state.productDetails,
            totalDebit: parseFloat(this.state.totalDebit),
            numberOfPayment: this.state.numberOfPayment,
            startPayment: this.state.startedPayment,
            payDebit: parseFloat(this.state.payDebit)
        }
        this.props.addAccount(account)
    }

    backClick() {
        let path = '/listaZaduzenja'
        this.props.history.push(path);
      }
  
      handleSelectUser(name) {
        this.setState({
          selectedUser: name
        })
      }
  
      handleChangeDetails(e){
        this.setState({
          productDetails: e.target.value
        })
      }
  
      handleChangeTotalDebit(e){
          this.setState({
            totalDebit: e.target.value,
          })
      }
  
      handleChangeNumberOfPayment(e){
          this.setState({
            numberOfPayment: e.target.value
          })
      }

      handleChangeStartedPayment(e) {
        this.setState({
          startedPayment: e.target.value
        })
      }
  
      handleChangePayDebit(e) {
        this.setState({
            payDebit: e.target.value
        })
      }



    render() {

        var totalDebit = parseFloat(this.state.totalDebit);
        var nOfP = parseFloat(this.state.numberOfPayment);
        var mPay = parseFloat(totalDebit/nOfP).toFixed(2);

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
                                                <Translate id="accountAdd"></Translate>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-body" >
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-6">
                                      <div className="form-group">
                                      <label name="select">
                                          <Translate id="chooseUser"></Translate>
                                      </label>
                                      <Select 
                                        onChange={this.handleSelectUser}
                                        options={this.state.users}
                                      />
                                      </div>
                                    </div>

                                    <div className="col-lg-7">
                                      <div className="form-group">
                                        <label name="description">
                                            <Translate id="productDetails"></Translate>
                                        </label>
                                        <textarea onChange={this.handleChangeDetails}
                                         className="form-control" rows="3" name="description"></textarea>
                                      </div>

                                    </div>
                                </div>

                                <div className="row">
                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="price">
                                          <Translate id="productPrice"></Translate>
                                      </label>
                                      <input onChange={this.handleChangeTotalDebit} value={this.state.totalDebit}
                                       type="number" className="form-control" name="price" min="0"></input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="payment">
                                          <Translate id="nmbPay"></Translate>
                                      </label>
                                      <input 
                                            onChange={this.handleChangeNumberOfPayment} 
                                            value={this.state.numberOfPayment}
                                            type="number" className="form-control"  min="0">
                                        </input>
                                    </div>
                                  </div>

                                  <div className="col-lg-4 col-sm-6">
                                    <div className="form-group">
                                      <label name="price">
                                          <Translate id="payAmmount"></Translate>
                                      </label>
                                      <input value={mPay} 
                                        type="text" className="form-control" name="price" disabled ></input>
                                    </div>
                                  </div>
                                </div>


                              <div className="row">
                                <div className="col-lg-4 p-4">
                                  <div>
                                    <label className="mt-3">
                                        <Translate id="startPayment"></Translate>
                                    </label>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control"
                                        onChange={this.handleChangeStartedPayment}/>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-4 p-4">
                                    <div>
                                        <label className="mt-3">
                                            <Translate id="payNow"></Translate>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                        <div className="form-group">
                                        <input className="form-control" 
                                            value={this.state.payDebit}
                                            onChange={this.handleChangePayDebit}
                                            type="number"/>
                                        </div>
                                    </div>
                              </div>

                              
                              <div className="row">
                                    <div className="ml-4 mb-4">
                                        <button type="submit" className="btn btn-primary pull-right" onClick={this.addAccount}> 
                                            <Translate id="saveBtn"></Translate>
                                        </button>
                                    </div>
                                </div>
                        </div>
                          
                          <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                              <div className="stats">
                                  <i className="material-icons text-danger">warning</i>
                                  <Translate id="fotterMsg"></Translate>
                              </div>
                          </div>

                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default withRouter(AccountAdd)