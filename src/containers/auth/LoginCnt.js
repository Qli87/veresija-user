import { connect } from "react-redux"; 
import Login from "../../components/auth/Login";
import  { login_request } from '../../actions/user.actions'

const mapStateToProps = state => ({
    user: state.userReducer.user
})

const mapDispatchToProps = dispatch => ({
    checkCredentials: (user) => dispatch(login_request(user))
})

const LoginCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginCnt