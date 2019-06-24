import React from 'react';
import { withRouter } from 'react-router-dom'
import { Translate } from 'react-localize-redux'
import ImageUploader from 'react-images-upload'


class UserEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            username:'',
            phone: '',
            email: '',
            description: '',
            address: ''
        }

        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.backClick = this.backClick.bind(this);
    }

    componentDidMount() {
        this.props.getUserDetails(parseInt(this.props.match.params.id))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.user.id,
            name: nextProps.user.name,
            username: nextProps.user.username,
            description: nextProps.user.description,
            phone: nextProps.user.phone,
            email: nextProps.user.email,
            address: nextProps.user.address
        })
    }

    handleChangeFirstName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangeDesc(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    saveEdit() {
        const user = {
            id: this.state.id,
            name: this.state.name,
            username: this.state.username,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
            address: this.state.address
        }
        this.props.editUser(user);
        // this.backClick();
    }

    backClick() {
        let path = '/listaKorisnika';
        this.props.history.push(path)
    }
 
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className='col-lg-12 col-md-10 col-sm-12'> 
                        <div className="card">
                            <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link cursorTable" >
                                                <i className="material-icons" title="Nazad" onClick={this.backClick} >keyboard_backspace</i>
                                                <i className="material-icons p-1 ml-3">person</i> <Translate id="userEditHeader"></Translate>{this.state.name || ""}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div> 
                            <div className="card-body" >
                                {/* <form className="form"> */}
                                    <div className="row">
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="nameTbl"></Translate>
                                                </label>
                                                <input type="text" name="name"
                                                className="form-control btnNoBorder" 
                                                value={this.state.name || ""}
                                                onChange={this.handleChangeFirstName} 
                                                required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="username"></Translate>
                                                </label>
                                                <input type="text" className="form-control btnNoBorder"
                                                value={this.state.username || ""}
                                                onChange={this.handleChangeUsername} 
                                                required />
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="fullDesc"></Translate>
                                                </label>
                                                <textarea className="form-control btnNoBorder" rows="1" 
                                                value={this.state.description || ""} 
                                                onChange={this.handleChangeDesc}></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row" style={{'paddingBottom':'60px'}}>
                                        <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="phoneTbl"></Translate>
                                                </label>
                                                <input type="text" className="form-control btnNoBorder" 
                                                value={this.state.phone || ""}
                                                onChange={this.handleChangePhone}
                                                required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-8 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="emailTbl"></Translate>
                                                </label>
                                                <input type="text" className="form-control btnNoBorder"
                                                value={this.state.email || ""}
                                                onChange={this.handleChangeEmail}/>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="address"></Translate>
                                                </label>
                                                <textarea className="form-control btnNoBorder" rows="1"
                                                value={this.state.address || ""} 
                                                onChange={this.handleChangeAddress}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <ImageUploader
                                                    withPreview={true}
                                                    withIcon={true}
                                                    buttonText='Choose images'
                                                    onChange={this.onDrop}
                                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                    maxFileSize={5242880}
                                                    singleImage={true}
                                                    label='Odaberite sliku za korisnika'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="p-3">
                                        {/* type="submit"  */}
                                            <button className="btn btn-primary pull-right" 
                                            onClick={this.saveEdit}>
                                                <Translate id="saveBtn"></Translate>
                                            </button>
                                        </div>
                                    </div>

                                {/* </form> */}
                            </div>

                            <div className="card-footer" style={{'borderTop': '1px solid lightgray'}}>
                                <div className="stats">
                                    <i className="material-icons text-danger">warning</i>
                                    <a>Polja za ime, prezime i telefon su obavezna!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UserEdit)
