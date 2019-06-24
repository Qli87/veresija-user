import React from 'react';
import { withRouter } from 'react-router-dom'
import UserHistoryItem from './UserHistoryItem';
import { Translate } from 'react-localize-redux'

class UserHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            sumTotalDebit: 0,
            sumDebitPayment: 0,
            total: 0
        }
        this.backClick = this.backClick.bind(this)
    }

    componentDidMount() {
        this.props.getUserHistory(this.props.user.id)
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        let uName= ""
        if(nextProps.historyDetails[0].userName !== undefined) {
            uName = nextProps.historyDetails[0].userName
        }
        //count for total('saldo')
        var sumTD = 0;
        var sumDP = 0;
        var total = 0;
        nextProps.historyDetails.map((item) => {
            sumTD += item.totalDebit
            sumDP += item.debitPayment
        })
        total = sumTD - sumDP
        this.setState({
            userName: uName,
            sumTotalDebit: sumTD,
            sumDebitPayment: sumDP,
            total: total
        })
    }

    backClick() {
        let path = '/listaKorisnika';
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header card-header-primary">
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <ul className="nav">
                                <li className="nav-item">  
                                    <a className="nav-link" >
                                        <i className="material-icons cursorTable" title="Nazad" onClick={this.backClick}>keyboard_backspace</i>
                                        <i className="material-icons p-1 ml-3">access_time</i> <Translate id="userHistoryHeader"></Translate> "{this.state.userName}"
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className=" text-primary">
                                <tr>
                                   <th>Datum</th>
                                   <th>Opis</th>
                                   <th>Zaduzenje</th>
                                   <th>Razduzenje</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.historyDetails.map(item => {
                                    return <UserHistoryItem
                                        key={item.id}
                                        date={item.date}
                                        description={item.description}
                                        totalDebit={item.totalDebit}
                                        debitPayment={item.debitPayment}
                                    />
                                })
                            }
                            </tbody>
                        </table>

                        <div className="mt-3 saldo">
                            <label className="saldoText">Saldo: {this.state.total}€ </label>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(UserHistory)