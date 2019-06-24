import { connect } from 'react-redux'
import AccountAdd from '../../components/account/AccountAdd';
import { addAccount_success } from '../../actions/account.actions'
import { getUsersSelect_request } from '../../actions/user.actions'

const mapStateToProps = state => ({
    accounts: state.accountReducer.accounts,
    usersForSelect: state.userReducer.userSelect
})

const mapDispatchToProps = dispatch => ({
    addAccount: (account) => dispatch(addAccount_success(account)),
    fetchUsers: () => dispatch(getUsersSelect_request())
})

const AccountAddCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(AccountAdd)

export default AccountAddCnt