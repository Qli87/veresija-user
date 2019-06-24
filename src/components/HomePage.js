import React from 'react';
import { Translate } from 'react-localize-redux'
import User from '../components/user/User'
import Account from '../components/account/Account'
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
        this.props.getAccounts();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-warning card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">euro_symbol</i>
                                </div>
                                <p className="card-category">
                                    <Translate id="day"></Translate>
                                </p>
                                <h6 className="card-title">55.00 {'\u20AC'}
                                </h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="daily"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">euro_symbol</i>
                                </div>
                                <p className="card-category">
                                    <Translate id="week"></Translate>
                                </p>
                                <h6 className="card-title">120.00 {'\u20AC'}
                                </h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                    <Translate id="weekly"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                            <div className="card-header card-header-primary card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">euro_symbol</i>
                                </div>
                                <p className="card-category">
                                    <Translate id="mounth"></Translate>
                                </p>
                                <h6 className="card-title">520.00 {'\u20AC'}
                                </h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="mounthly"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card card-stats">
                            <div className="card-header card-header-danger card-header-icon">
                                <div className="card-icon">
                                    <i className="material-icons">account_balance</i>
                                </div>
                                <p className="card-category">
                                    <Translate id="total"></Translate>
                                </p>
                                <h6 className="card-title">1200.00 {'\u20AC'}
                                </h6>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a href="#pablo">
                                        <Translate id="totaly"></Translate>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-6 col-md-3 col-sm-3">
        
                        <div className="card">
                            <div className="card-header card-header-tabs card-header-primary">
                                    
                                <h4 className="card-title">
                                    <a href="listaZaduzenja" title="Lista zaduzenja">
                                    <i className="material-icons">home</i>
                                    <Translate id="accounts"></Translate>
                                    </a>
                                </h4>
                                <p className="card-category"><i className="material-icons">fiber_new</i>
                                    <Translate id="newAccounts"></Translate>
                                </p>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className="text-primary">
                                        <tr>
                                            <th className="translateHeaderStyle"><Translate id="idTbl"></Translate></th>
                                            <th className="translateHeaderStyle"><Translate id="nameTbl"></Translate></th>
                                            <th className="translateHeaderStyle"><Translate id="accountTbl"></Translate></th>
                                            <th className="translateHeaderStyle"><Translate id="paymentTbl"></Translate></th>
                                        </tr>
                                    </thead>
                                    {
                                        this.props.accounts.map(account => {
                                            return <Account 
                                                key={account.id}
                                                id={account.id}
                                                name={account.name}
                                                monthlyDebit={account.monthlyDebit}
                                                totalDebit={account.totalDebit}
                                                user_id={account.userId}
                                            />
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-lg-6 col-md-3 col-sm-3">
                        <div className="card">
                            <div className="card-header card-header-warning">
                                <h4 className="card-title">
                                    <a href="listaKorisnika" title="Lista korisnika">
                                        <i className="material-icons">person_pin</i> 
                                        <Translate id="users"></Translate>
                                    </a>
                                </h4>
                                <p className="card-category"><i className="material-icons">fiber_new</i>
                                    <Translate id="newUsers"></Translate>
                                </p>
                            </div>
                            <div className="card-body table-responsive">
                                <table className="table table-hover">
                                    <thead className="text-warning">
                                        <tr>
                                            <th><Translate id="idTbl"></Translate></th>
                                            <th><Translate id="nameTbl"></Translate></th>
                                            <th><Translate id="phoneTbl"></Translate></th>
                                            <th><Translate id="emailTbl"></Translate></th>
                                        </tr>
                                    </thead>
                                    {
                                        this.props.users.map(user => {
                                            return <User 
                                                key={user.id}
                                                id={user.id}
                                                name={user.name}
                                                phone={user.phone}
                                                email={user.email}
                                                userList={false}
                                            />
                                        })
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}

export default withRouter(HomePage)