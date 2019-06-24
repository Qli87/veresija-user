import { connect } from 'react-redux'
import UserAdd from '../../components/user/UserAdd';
import { addUser_success, addUser_request } from '../../actions/user.actions';

const mapStateToProps = state => ({
    users: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addUser_success(user))
})

const UserAddCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(UserAdd)

export default UserAddCnt