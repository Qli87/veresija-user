import { connect } from 'react-redux'
import { getAccounts_request, deleteAccount_success } from '../../actions/account.actions';
import AccountList from '../../components/account/AccountList';

const mapStateToProps = state => ({
    accounts: state.accountReducer.accounts
})

const mapDispatchToProps = dispatch => ({
    getAccounts: () => dispatch(getAccounts_request()),
    deleteAccount: (account) => dispatch(deleteAccount_success(account))
})

const AccountListCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AccountList)

export default AccountListCnt