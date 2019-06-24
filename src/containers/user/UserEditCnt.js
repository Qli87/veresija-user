import { connect } from 'react-redux'
import UserEdit from '../../components/user/UserEdit';
import { getUserDetails_success, editUser_success } from '../../actions/user.actions';

const mapStateToProps = state => ({
    user: state.userReducer.user,
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
    getUserDetails: (id) => dispatch(getUserDetails_success(id)),
    editUser: (user) => dispatch(editUser_success(user))
})

const UserEditCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(UserEdit)

export default UserEditCnt