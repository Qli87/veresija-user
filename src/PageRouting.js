import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import SidebarCnt from './containers/SidebarCnt';
import HomePageCnt from './containers/user/HomePageCnt';
import UserListCtn from './containers/user/UserListCnt';
import UserHistoryCnt from './containers/user/UserHistoryCnt';
import UserEditCnt from './containers/user/UserEditCnt';
import UserAddCnt from './containers/user/UserAddCnt';
import { accountPath } from './constants/account.constants';
import AccountListCnt from './containers/account/AccountListCnt';
import AccountHistoryCnt from './containers/account/AccountHistoryCnt'
import AccountDetailsCnt from './containers/account/AccountDetailsCnt';
import AccountEditCnt from './containers/account/AccountEditCnt';
import AccountPaymentCnt from './containers/account/AccountPaymentCnt';
import AccountAddCnt from './containers/account/AccountAddCnt';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePageCnt /> </div>
    },
    {
        path: userPath.userList,
        main: () => <div> <UserListCtn /> </div>
    },
    {
        path: userPath.userHistory+'/:id',
        main: ({match}) => <div> <UserHistoryCnt user={match.params}/> </div>
    },
    {
        path: userPath.userEdit+'/:id',
        main: ({match}) => <div> <UserEditCnt user={match.params}/> </div>
    },
    {
        path: userPath.userAdd,
        main: () => <div> <UserAddCnt /> </div>
    },
    {
        path: accountPath.accountList,
        main: () => <div> <AccountListCnt /> </div>
    },
    {
        path: accountPath.accountHistory+'/:id',
        main: ({match}) => <div> <AccountHistoryCnt account={match.params}/> </div>
    },
    {
        path: accountPath.accountDetails+'/:id',
        main: ({match}) => <div> <AccountDetailsCnt account={match.params}/> </div>
    },
    {
        path: accountPath.accountEdit+'/:id',
        main: ({match}) => <div> <AccountEditCnt account={match.params}/> </div>
    },
    {
        path: accountPath.accountPayment+'/:id',
        main: ({match}) => <div> <AccountPaymentCnt account={match.params} /> </div>
    },
    {
        path: accountPath.addAccount,
        main: () => <div> <AccountAddCnt /> </div>
    }
]

export default class PageRouting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <SidebarCnt />
                    <div className="col-lg-9 offset-3 col-sm-10 pt-3">
                        {
                            routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))
                        }
                    </div>
                </div>
            </Router>
        )
    }
}