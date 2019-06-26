import React from 'react';
import './assets/css/index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PageRouting from './PageRouting';
import PrivateRoute from './components/PrivateRoute';
import LoginCnt from './containers/auth/LoginCnt';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/prijavaKorisnika' component={LoginCnt} />
        <PrivateRoute path='/pocetna' component={PageRouting}/>
        <PrivateRoute path='/listaKorisnika' component={PageRouting}/>
        <PrivateRoute path='/istorijaKoriska' component={PageRouting}/>
        <PrivateRoute path='/izmjeniKorisnika' component={PageRouting}/>
        <PrivateRoute path='/dodajKorisnika' component={PageRouting}/>
        <PrivateRoute path='/listaZaduzenja' component={PageRouting}/>
        <PrivateRoute path='/istorijaZaduzenja' component={PageRouting}/>
        <PrivateRoute path='/detaljiZaduzenja' component ={PageRouting}/>
        <PrivateRoute path='/izmjeniZaduzenje' component={PageRouting}/>
        <PrivateRoute path='/uplataZaduzenja' component={PageRouting}/>
        <PrivateRoute path='/dodajZaduzenje' component={PageRouting}/>
      </Router>
    )
  }
}

export default App;
