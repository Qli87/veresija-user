import { connect } from 'react-redux'
import Sidebar from '../Sidebar'
import { getTranslations_request } from '../actions/user.actions';

const mapStateToProps = state => ({
    translations: state.userReducer.translations
})

const mapDispatchToProps = dispatch => ({
    getTranslations: () => dispatch(getTranslations_request())
})


const SidebarCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

export default SidebarCnt