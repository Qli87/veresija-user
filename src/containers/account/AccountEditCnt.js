import { connect } from 'react-redux'
import AccountEdit from '../../components/account/AccountEdit';
import { getAccountDetails_success, editAccount_success } from '../../actions/account.actions'
import { getUsersSelect_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    accountDetails: state.accountReducer.accountDetails,
    usersForSelect: state.userReducer.userSelect,
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(getAccountDetails_success(id)),
    getUsersSelect: () => dispatch(getUsersSelect_request()),
    //when make a api, need to fix that!!! editAccount_request!
    editAccount: (user) => dispatch(editAccount_success(user))
})

const AccountEditCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountEdit)

export default AccountEditCnt