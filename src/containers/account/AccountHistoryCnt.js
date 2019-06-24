import { connect } from 'react-redux'
import AccountHistory from '../../components/account/AccountHistory'
import { getAccountsHistory_request } from '../../actions/account.actions';


const mapStateToProps = state => ({
    accountHistory: state.accountReducer.accountHistory
})

const mapDispatchToProps = dispatch => ({
    getHistory: (id) => dispatch(getAccountsHistory_request(id)) 
})

const AccountHistoryCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AccountHistory)

export default AccountHistoryCnt