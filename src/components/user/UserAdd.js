import React from 'react';
import { withRouter } from 'react-router-dom';
import { Translate, withLocalize} from 'react-localize-redux';
import ImageUploader from 'react-images-upload'

class UserAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            description: '',
            phone: '',
            email: '',
            pictures: [],
            address: ''
        }
        this.handleChangename = this.handleChangename.bind(this)
        this.handleChangeusername = this.handleChangeusername.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
        this.sbForm = this.sbForm.bind(this)
        this.onDrop = this.onDrop.bind(this);
        this.backClick = this.backClick.bind(this); 
    }
    
    backClick() {
        let path = '/listaKorisnika';
        this.props.history.push(path);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    
    handleChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleChangename(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeusername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleChangeDescription(e) {
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

    sbForm() {
        const user = {
            name: this.state.name,
            username: this.state.username,
            phone: this.state.phone,
            email: this.state.email,
            description: this.state.description,
            address: this.state.address
        }
        console.log('user in sbForm: ', user)
        this.props.addUser(user);
        this.backClick();
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
                                            <a className="nav-link" >
                                                <i className="material-icons" title="Nazad" onClick={this.backClick} style={{'cursor':'pointer'}}>keyboard_backspace</i>
                                                <i className="material-icons p-1 ml-3">person_add</i> 
                                                    <Translate id="userAdd"></Translate>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                            
                            <div className="card-body" >
                                {/* <form className="form"> */}
                                    <div className="row">
                                        <div className="col-lg-5 offset-1 col-md-5 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="nameTbl"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.name}
                                                    onChange={this.handleChangename}
                                                    required
                                                    />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="username"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.username}
                                                    onChange={this.handleChangeusername}
                                                    required
                                                    />
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="fullDesc"></Translate>
                                                </label>
                                                <textarea className="form-control" rows="1" style={{'border': '0px'}}
                                                    value={this.state.description}
                                                    onChange={this.handleChangeDescription}
                                                    ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="phoneTbl"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.phone}
                                                    onChange={this.handleChangePhone}
                                                    required/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="emailTbl"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.email}
                                                    onChange={this.handleChangeEmail}/>
                                            </div>  
                                        </div>

                                        <div className="col-lg-4 col-md-5 col-sm-6">
                                            <div className="form-group">
                                                <label className="bmd-label-floating">
                                                    <Translate id="address"></Translate>
                                                </label>
                                                <input type="text" className="form-control" style={{'border': '0px'}}
                                                    value={this.state.address}
                                                    onChange={this.handleChangeAddress}/>
                                            </div>  
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-8 col-sm-12">    
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

                                    <div className="row">
                                        <div className="p-3">
                                            <button onClick={this.sbForm}
                                                 className="btn btn-primary pull-right">
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

export default withRouter(UserAdd)