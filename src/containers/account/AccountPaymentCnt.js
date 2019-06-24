import { connect } from 'react-redux'
import AccountPayment from '../../components/account/AccountPayment';
import { getAccountsHistory_request, getAccountDetails_success, accountPayment_request } from '../../actions/account.actions';
import { getUsersSelect_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    accountHistory: state.accountReducer.accountHistory,
    usersForSelect: state.userReducer.userSelect,
    accountDetails: state.accountReducer.accountDetails
})

const mapDispatchToProps = dispatch => ({
    getHistory: (id) => dispatch(getAccountsHistory_request(id)),
    getUsers: () => dispatch(getUsersSelect_request()),
    getDetails: (id) => dispatch(getAccountDetails_success(id)),
    accountPayFn : (details) => dispatch(accountPayment_request(details))
})

const AccountPaymentCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AccountPayment)

export default AccountPaymentCnt