import React from 'react'
import { withRouter } from 'react-router-dom'


class AccountHistoryItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <tr>
                <td> {this.props.date} </td>
                <td> {this.props.description} </td>
                <td> {this.props.totalDebit} </td>
                <td> {this.props.debitPayment} </td>
            </tr>
        )
    }
}

export default withRouter(AccountHistoryItem)
