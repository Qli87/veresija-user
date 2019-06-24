import { connect } from 'react-redux'
import HomePage from '../../components/HomePage';
import { getUsersForHP_request } from '../../actions/user.actions';
import { getAccountsForHp_request } from '../../actions/account.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users,
    accounts: state.accountReducer.accounts
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsersForHP_request()),
    getAccounts: () => dispatch(getAccountsForHp_request())
})

const HomePageCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

export default HomePageCnt