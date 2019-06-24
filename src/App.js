import React from 'react';
import './assets/css/index.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PageRouting from './PageRouting';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/pocetna' component={PageRouting}/>
        <Route path='/listaKorisnika' component={PageRouting}/>
        <Route path='/istorijaKoriska' component={PageRouting}/>
        <Route path='/izmjeniKorisnika' component={PageRouting}/>
        <Route path='/dodajKorisnika' component={PageRouting}/>
        <Route path='/listaZaduzenja' component={PageRouting}/>
        <Route path='/istorijaZaduzenja' component={PageRouting}/>
        <Route path='/detaljiZaduzenja' component ={PageRouting}/>
        <Route path='/izmjeniZaduzenje' component={PageRouting}/>
        <Route path='/uplataZaduzenja' component={PageRouting}/>
        <Route path='/dodajZaduzenje' component={PageRouting}/>
      </Router>
    )
  }
}

export default App;
