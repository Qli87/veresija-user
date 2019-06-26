    import React from 'react'
import { withRouter } from 'react-router-dom'


class User extends React.Component {
    constructor(props) {
        super(props)

        this.userHistory = this.userHistory.bind(this)
        this.editUser = this.editUser.bind(this);
    }

    editUser(user_id) {
        let path = '/izmjeniKorisnika/'+user_id
        this.props.history.push(path)
    }

    userHistory(user_id) {
        let path = '/istorijaKoriska/'+user_id;
        this.props.history.push(path)
    }

    render() {
        return (
            <tbody style={{'textAlign':'center'}}>
            {
                this.props.userList 
                ?
                <tr>
                    <td>#{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.description.slice(0,20)}</td>
                    <td>{this.props.phone.slice(0,9)}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.status}</td>
                    <td style={{'textAlign':'left'}}>
                            <button type="button" rel="tooltip" 
                                    title="Istorija korisnika" 
                                    className="btn btn-success btn-link btn-sm btnNoBorder"
                                    onClick = {() => this.userHistory(this.props.id)}>
                                <i className="material-icons">format_list_bulleted</i>
                            </button>
                            <button type="button" rel="tooltip" 
                                    title="Izmjeni korisnika" 
                                    className="btn btn-primary btn-link btn-sm btnNoBorder"
                                    onClick={() => this.editUser(this.props.id)}>
                                <i className="material-icons">edit</i>
                            </button>
                            <button type="button" rel="tooltip" onClick={() => this.props.deleteUserClick(this.props.id)}
                                    title="Obrisi korisnika" 
                                    className="btn btn-danger btn-link btn-sm btnNoBorder">
                                <i className="material-icons">close</i>
                            </button>
                        </td>
                </tr>
                :
                <tr onClick={() => this.editUser(this.props.id)}>
                    <td>#{this.props.id}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.phone.slice(0,10)}</td>
                    <td>{this.props.email}</td>
                </tr>
                }
            </tbody>
        )
    }
}

export default withRouter(User)