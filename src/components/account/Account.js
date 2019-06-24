import React from 'react'
import { withRouter } from 'react-router-dom'

class Account extends React.Component {
    constructor(props) {
        super(props)

        this.idClick = this.idClick.bind(this)
        this.userClick = this.userClick.bind(this)
        this.handleClickHistory = this.handleClickHistory.bind(this)
        this.handleClickDetails = this.handleClickDetails.bind(this)
        this.handleClickEdit = this.handleClickEdit.bind(this)
        this.handleClickDebtPayment = this.handleClickDebtPayment.bind(this)
    }

    handleClickDebtPayment(account_id) {
        let path = '/uplataZaduzenja/'+account_id
        this.props.history.push(path)
    }

    handleClickDetails(account_id) {
        let path = '/detaljiZaduzenja/'+account_id
        this.props.history.push(path)
    }

    handleClickEdit(account_id) {
        let path = '/izmjeniZaduzenje/'+account_id
        this.props.history.push(path)
    }

    handleClickHistory(account_id) {
        let path = '/istorijaZaduzenja/'+account_id
        this.props.history.push(path)
    }

    idClick(account_id) {
        let path = '/izmjeniZaduzenje/'+account_id;
        this.props.history.push(path)
    }

    userClick(user_id) {
        let path = "/istorijaZaduzenja/"+user_id;
        this.props.history.push(path);       
    }

    render() {
        return (
            <tbody style={{'textAlign':'center'}}>
                {
                        this.props.fullDetails 
                        ?
                            <tr>
                                <td>#{this.props.accountId}</td>
                                <td>{this.props.name}</td>
                                <td>{this.props.phone}</td>
                                <td>{this.props.totalDebit}</td>
                                <td>{this.props.numberOfPayment}</td>
                                <td>{this.props.monthlyDebit}</td>
                                <td >
                                    <button type="button" rel="tooltip" 
                                        onClick={() => this.handleClickHistory(this.props.accountId)}
                                        title="Istorija zaduzenja" 
                                        className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                                    <i className="material-icons">format_list_bulleted</i>
                                    </button>
                                    <button type="button" rel="tooltip" 
                                            onClick={() => this.handleClickDebtPayment(this.props.accountId)}
                                            title="Upisi ratu" 
                                            className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                                        <i className="material-icons">note_add</i>
                                    </button>
                                    <button type="button" rel="tooltip" 
                                            onClick={() => this.handleClickDetails(this.props.accountId)}
                                            title="Pogledaj zaduzenje" 
                                            className="btn btn-success btn-link btn-sm" style={{'border': '0'}}>
                                        <i className="material-icons">remove_red_eye</i>
                                    </button>
                                    <button onClick={() => this.handleClickEdit(this.props.accountId)}
                                            type="button" rel="tooltip" 
                                            title="Izmjeni zaduzenje" 
                                            className="btn btn-primary btn-link btn-sm" style={{'border': '0'}}>
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" 
                                            onClick={() => this.props.deleteAccountClick(this.props.accountId)}
                                            title="Obrisi zaduzenje" 
                                            className="btn btn-danger btn-link btn-sm" style={{'border': '0'}}>
                                        <i className="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                            : 
                            <tr style={{'textAlign':'left'}}>
                                <td className="cursorTable" onClick={ () => this.idClick(this.props.id)} title="Izmjeni zaduzenje"> {this.props.id} </td>
                                <td className="cursorTable" onClick={ () => this.userClick(this.props.user_id)} title="Istorija zaduzenja"> {this.props.name} </td>
                                <td> {this.props.totalDebit} </td>
                                <td> {this.props.monthlyDebit} </td>
                            </tr>
                }
            </tbody>
        )
    }
}

export default withRouter(Account)
