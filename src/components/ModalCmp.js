import React from 'react';
import Modal from 'react-responsive-modal'
import { withLocalize, Translate } from 'react-localize-redux'

class ModalCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal  
        })
    }


    render() {
        return (
            <Modal open={this.state.showModal} onClose={this.props.shutDownModal}>
                <div className="card">
                    <div className="card-header card-header-primary">
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <ul className="nav">
                                    <li className="nav-item">  
                                        <a className="nav-link">
                                            <i className="material-icons p-1">priority_high</i> 
                                            <Translate id="sure?"></Translate> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <Translate id="deleteUserModal"></Translate> {this.props.user.name}
                    </div>
                    
                    <div style={{'textAlign':'right'}}>
                        <button className="btn btn-danger btn-sm" onClick={this.props.shutDownModal}>
                            <Translate id="backBtn"></Translate>
                        </button>
                        <button className="btn btn-primary btn-sm"  onClick={() => this.props.deleteUser(this.props.user.id)}> 
                            <Translate id="deleteBtn"></Translate> 
                        </button>
                        
                    </div>
                </div>  
            </Modal>
        )
    }
}

export default withLocalize(ModalCmp)