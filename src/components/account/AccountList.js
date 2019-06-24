import React from 'react';
import { withRouter } from 'react-router-dom'
import { Translate } from 'react-localize-redux'
import Account from './Account'
import Pagination from 'react-js-pagination'
import ModalComponent from '../ModalComponent';

class AccountList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upId: true,
            upName: true,
            upPhone: true,
            upTotal: true,
            upNmbPy: true,
            upMnth: true,
            activePage: 1,
            accountsPerPage: 5,
            numberOfPages: 5,
            sort: {
                column : null,
                direction: 'desc'
            },
            acc: '',
            showModalDelete: false,
            sortedData: []
        }
        this.onSort = this.onSort.bind(this)
        this.searchByName = this.searchByName.bind(this)
        this.setActivePage = this.setActivePage.bind(this)
        this.deleteAccount = this.deleteAccount.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        this.props.getAccounts()
    }

    componentWillReceiveProps(nextProps) {
        let paginationAccounts = [];
        if(nextProps.accounts.length > 0) {
            paginationAccounts = nextProps.accounts.slice(this.state.activePage*this.state.accountsPerPage-this.state.accountsPerPage,
                this.state.activePage*this.state.accountsPerPage, []);
        }
        this.setState({
            sortedData: paginationAccounts
        })
    }

    setActivePage(currentPage) {
        let paginationAccounts = [];
        paginationAccounts = this.props.accounts.slice(currentPage*this.state.accountsPerPage-this.state.accountsPerPage,
            currentPage*this.state.accountsPerPage, []);
        this.setState({
            activePage: currentPage,
            sortedData: paginationAccounts
        })
    }

    onSort = (column) => (e) => {
        var chevronDirectionId = ''
        var chevronDirectionName = ''
        var chevronDirectionPhone = ''
        var chevronDirectionTotal = ''
        var chevronDirectionNmbP = ''
        var chevronDirectionMnt = ''
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
            } else if (column === 'id') {
                chevronDirectionId = this.state.upId ? false : true
                return b.id - a.id
            } else if (column === 'phone') {
                chevronDirectionPhone = this.state.upPhone ? false : true
                return b.phone - a.phone
            } else if(column == 'totalDebit') {
                chevronDirectionTotal = this.state.upTotal ? false : true
                return b.totalDebit - a.totalDebit
            } else if(column == 'monthlyDebit') {
                chevronDirectionMnt = this.state.upMnth ? false : true
                return b.totalDebit - a.totalDebit
            } else if(column == 'numberOfPayment') {
                chevronDirectionNmbP = this.state.upNmbPy ? false : true
                return b.totalDebit - a.totalDebit
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
            upId: chevronDirectionId,
            upName: chevronDirectionName,
            upPhone: chevronDirectionPhone,
            upTotal: chevronDirectionTotal,
            upMnth: chevronDirectionMnt,
            upNmbPy: chevronDirectionNmbP
        })
    }

    searchByName = (event) => {
        let filteredData = this.props.accounts;
        filteredData = filteredData.filter((item) => {
            return item.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1
        })
        if(filteredData.length > 0) {
            filteredData = filteredData.slice(this.state.activePage*this.state.accountsPerPage-this.state.accountsPerPage,
                this.state.activePage*this.state.accountsPerPage, []);
        }
        this.setState({
            sortedData: filteredData
        })
    }

    closeModal() {
        this.setState({
            showModalDelete: false
        })
    }

    deleteAccountClick(_account) {
        this.setState({
            acc: _account,
            showModalDelete: true
        })
    }

    deleteAccount(account) {
        this.props.deleteAccount(account)
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
                                                <Translate id="accountListHeader"></Translate>
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
                                                   <Translate id="accountId"></Translate>
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
                                            <th className="cursorTable" onClick={this.onSort('totalDebit')}>
                                                <p>
                                                    {
                                                        this.state.upTotal 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="total"></Translate>
                                                </p>
                                            </th>
                                            <th className="cursorTable" onClick={this.onSort('numberOfPayment')}>
                                                <p>
                                                {   
                                                        this.state.upNmbPy 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="nmbCount"></Translate>
                                                </p>
                                            </th>
                                            <th className="cursorTable" onClick={this.onSort('monthlyDebit')}>
                                                <p>
                                                    {
                                                        this.state.upMnth 
                                                        ? <span style={{'fontSize': '12px'}} className="fa fa-chevron-down"></span>
                                                        : <span style={{'fontSize': '12px'}} className="fa fa-chevron-up"></span>
                                                    }
                                                    <Translate id="mnthPay"></Translate>
                                                </p>
                                            </th>
                                            <th style={{'textAlign':'center'}}>
                                                <p>
                                                    <Translate id="actions" ></Translate>
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <tbody> */}
                                    {
                                        this.state.sortedData.map(account => {
                                            return <Account 
                                                    key={account.id}
                                                    accountId={account.id}
                                                    userId={account.userId} 
                                                    name={account.name} 
                                                    phone={account.phone}
                                                    totalDebit={account.totalDebit}
                                                    monthlyDebit={account.monthlyDebit}
                                                    numberOfPayment={account.numberOfPayment}
                                                    fullDetails={true}
                                                    deleteAccountClick={() => this.deleteAccountClick(account)}
                                                />
                                        })
                                    }
                                    {/* </tbody> */}
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="paginationAlignment">
                        <Pagination 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.accountsPerPage}
                            totalItemsCount={this.props.accounts.length}
                            pageRangeDisplayed={5}
                            activeClass="activeClassPagination"
                            onChange={this.setActivePage}
                            hideDisabled={true}
                        />
                    </div>

                    <ModalComponent showModal={this.state.showModalDelete}
                        sureMessage="Jeste li sigurni?"
                        modalMessage={<Translate id="deleteUser"></Translate>}
                        account={this.state.acc}
                        shutDownModal={this.closeModal} 
                        deleteAccount={() => this.deleteAccount(this.state.acc)}
                        modalName="deleteModal"
                    />

                </div>
            </div>
        )
    }
}

export default withRouter(AccountList)