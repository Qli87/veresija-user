import { connect } from 'react-redux'
import UserHistory from '../../components/user/UserHistory';
import { getUserHistory_request, getUserHistory_success } from '../../actions/user.actions'

const mapStateToProps = state => ({
    historyDetails: state.userReducer.historyDetails
})

const mapDispatchToProps = dispatch => ({
    getUserHistory: (id) => dispatch(getUserHistory_request(id))
})

const UserHistoryCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserHistory)

export default UserHistoryCnt