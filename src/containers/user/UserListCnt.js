import { connect } from 'react-redux'
import UserList from '../../components/user/UserList'
import { getUsers_request, deleteUser_success } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
    getUsers: () => dispatch(getUsers_request()),
    deleteUser: (id) => dispatch(deleteUser_success(id))
})

const UserListCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)

export default UserListCtn