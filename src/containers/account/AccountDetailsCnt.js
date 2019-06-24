import { connect } from 'react-redux'
import AccountDetails from '../../components/account/AccountDetails'
import { getAccountDetails_success } from '../../actions/account.actions';

const mapStateToProps = state => ({
    accountDetails: state.accountReducer.accountDetails
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getAccountDetails_success(id))
})

const AccountDetailsCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AccountDetails)

export default AccountDetailsCnt