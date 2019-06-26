import React from 'react'
import { withRouter } from "react-router-dom";
import { Translate } from 'react-localize-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.login = this.login.bind(this)
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        localStorage.setItem('user', this.state.username)
        let path = '/pocetna'
        this.props.history.push(path)
        // this.props.checkCredentials(user)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="log-style pl-5 pr-5">
                        <div className="log-title" style={{'width': '250px'}}>
                            <h4 className="p-1">User login</h4>
                        </div>
                        <div className="row p-1">
                            <input type="text" value={this.state.username} 
                                    onChange={this.handleUsername}
                                    className="form-control input-sm"
                                    placeholder="First name" required/>
                        </div>
                        <div className="row p-1">
                            <input type="password" value={this.state.password}
                                    onChange={this.handlePassword}
                                    className="form-control input-sm" 
                                    placeholder="Password" required/>
                        </div>
                        {/* <div className="row p-1">
                            <p>Wrong credentials!</p>
                        </div> */}
                        <div className="row mt-3">
                            <div>
                                <input type="checkbox"/>
                                <label style={{'fontSize': '12px'}}>Remember me </label>
                                <a href="#" style={{'fontSize': '12px', 'marginLeft': '100px'}}>Forgot password?</a>
                            </div>
                        </div>
                        <div className="btn btn-sm" onClick={this.login}
                            style={{'marginLeft':'-20px', 'backgroundColor':'purple', 'borderRadius': '4px'}}> Login </div>
                    </div>
            </div>
          </div>
        )
    }
}

export default withRouter(Login)