import React from 'react'
import { Translate } from 'react-localize-redux'
import { withRouter } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import User from './User'
import Pagination from 'react-js-pagination'
import ModalCmp from '../ModalCmp';

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upId: true,
            upName: true,
            upPhone: true,
            upDesc: true,
            upEmail: true,
            activePage: 1,
            usersPerPage: 5,
            numberOfPages: 5,
            sort: {
                column : null,
                direction: 'desc'
            },
            sortedData: [],
            showDeleteModal: false,
            user: ''
        }
        this.onSort = this.onSort.bind(this)
        this.setActivePage = this.setActivePage.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    componentWillReceiveProps(nextProps) {
        let paginationUsers = [];
        if(nextProps.users.length > 0) {
            paginationUsers = nextProps.users.slice(this.state.activePage*this.state.usersPerPage-this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []);
        }
        this.setState({
            sortedData: paginationUsers
        })
    }

    setActivePage(currentPage) {
        let paginationUsers = [];
        paginationUsers = this.props.users.slice(currentPage*this.state.usersPerPage-this.state.usersPerPage,
            currentPage*this.state.usersPerPage, []);
        this.setState({
            activePage: currentPage,
            sortedData: paginationUsers
        })
    }

    searchByName = (event) => {
        let filteredData = this.props.users;
        filteredData = filteredData.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1
        })
        if(filteredData.length > 0) {
            filteredData = filteredData.slice(this.state.activePage*this.state.usersPerPage-this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []);
        }
        this.setState({
            sortedData: filteredData
        })
    }

    onSort = (column) => (e) => {
        var chevronDirectionId = ''
        var chevronDirectionName = ''
        var chevronDirectionPhone = ''
        var chevronDirectionDesc = ''
        var chevronDirectionEmail = ''
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.sortedData.sort((a,b) => {
            if(column === 'name') {
                chevronDirectionName = this.state.upName ? false : true
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if (column === 'desc') {
                chevronDirectionDesc = this.state.upDesc ? false : true
                const descA = a.description.toUpperCase();
                const descB = b.description.toUpperCase();
                if(descA < descB) {
                    return -1;
                }
                if(descA > descB) {
                    return 1
                }
                return 0
            } else if (column === 'email') {
                chevronDirectionEmail = this.state.upEmail ? false : true
                const mailA = a.email.toUpperCase();
                const mailB = b.email.toUpperCase();
                if(mailA < mailB){
                    return -1
                }
                if(mailA > mailB){
                    return 1
                }
                return 0
            } else if (column === 'id') {
                chevronDirectionId = this.state.upId ? false : true
                return b.id - a.id
            } else if (column === 'phone') {
                chevronDirectionPhone = this.state.upPhone ? false : true
                return b.phone - a.phone
            }
        })
        if(direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            sortedData: data,
            upName: chevronDirectionName,
            upId: chevronDirectionId,
            upDesc: chevronDirectionDesc,
            upPhone: chevronDirectionPhone,
            upEmail: chevronDirectionEmail
        })
    }
    
    closeModal() {
        this.setState({
            showDeleteModal: false
        })
    }

    deleteUserClick(_user) {
        this.setState({
            showDeleteModal: true,
            user: _user
        })
    }

    deleteUser(user){
        this.props.deleteUser(user)
        this.closeModal()
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <div className="nav-tabs-navigation">
                                <div className="nav-tabs-wrapper">
                                    <ul className="nav">
                                        <li className="nav-item">  
                                            <a className="nav-link">
                                                <i className="material-icons p-1">supervisor_account</i> 
                                                <Translate id="userListHeader"></Translate>
                                                <span className="nav-link searchBoxHeader">
                                                    <i className="material-icons">search</i>
                                                    <input type="text"  placeholder="Name"
                                                    // 'fontFamily':'Lucida Console, Monaco, monospace'  
                                                        className="searchByName"
                                                        onChange={this.searchByName}/>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="text-primary" style={{'textAlign':'center'}}>
                                        <tr>
                                            <th className="cursorTable" onClick={this.onSort('id')}>
                                                <p>
                                                    {
                                                        this.state.upId 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                   <Translate id="userId"></Translate>
                                                </p>
                                            </th>

                                            <th className="sortable cursorTable" onClick={this.onSort('name')}>
                                                <p>
                                                    {
                                                        this.state.upName 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="nameTbl"></Translate>
                                                </p>
                                            </th>
                                            <th className="cursorTable" onClick={this.onSort('desc')}>
                                                <p>
                                                    {
                                                        this.state.upDesc 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="usrDesc"></Translate>
                                                </p>
                                            </th>
                                            <th className="cursorTable" onClick={this.onSort('phone')}>
                                                <p>
                                                    {
                                                        this.state.upPhone 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="phoneTbl"></Translate>
                                                </p>    
                                            </th>
                                            <th className="cursorTable" onClick={this.onSort('email')}>
                                                <p>
                                                    {
                                                        this.state.upEmail 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="emailTbl"></Translate>
                                                </p> 
                                            </th>
                                            <th>
                                                <p style={{'marginRight':'-100px'}}>
                                                    <Translate id="actions"></Translate>
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                        {
                                            this.state.sortedData.map(user => {
                                                return <User 
                                                    key={user.id}
                                                    id={user.id}
                                                    name={user.name}
                                                    phone={user.phone}
                                                    email={user.email}
                                                    description={user.description}
                                                    status={user.status}
                                                    userList={true}
                                                    deleteUserClick = {() => this.deleteUserClick(user)}
                                                />
                                            })
                                        }
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="paginationAlignment">
                        <Pagination 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.usersPerPage}
                            totalItemsCount={this.props.users.length}
                            pageRangeDisplayed={5}
                            activeClass="activeClassPagination"
                            onChange={this.setActivePage}
                        />
                    </div>

                </div>

                <ModalCmp showModal={this.state.showDeleteModal}
                    sureMessage={<Translate id="sure?"></Translate>}
                    modalMessage={<Translate id="deleteUserModal"></Translate>}
                    shutDownModal={this.closeModal}
                    user={this.state.user || ""}
                    deleteUser={() => this.deleteUser(this.state.user)}
                />


            </div>
        )
    }
}


export default withRouter(UserList)