import React from 'react'
import Clock from 'react-live-clock'
import { Translate, withLocalize } from 'react-localize-redux'
import { NavLink } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';
import Select from 'react-select'
import { renderToStaticMarkup } from 'react-dom/server'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.props.initialize({
            languages: [
                {name: "Latinica", code: "lt"},
                {name:"Cirilica", code:"cr"}
            ],
            options: {
                renderToStaticMarkup,
                defaultLanguage: 'lt'
            }
        })
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
    }

    componentDidMount() {
        this.props.getTranslations();
    }

    //potrebno je nakon ucitavanja predovoda pozvati funk this.props.addTranslation(trans), da bi se ucitali prevodi
    componentWillReceiveProps(nextProps) {
        if(nextProps.translations !== undefined) {
            const trans = nextProps.translations[0];
            this.props.addTranslation(trans)
        }
    }

    onChangeLanguage(slag) {
        this.props.setActiveLanguage(slag.value)
    }


    render() {
        const languageInSelect = [
            { label: 'Latinica', value: 'lt' },
            { label: 'Cirilica', value: 'cr' }
          ];

        return(
            <div className="sidebar" style={{'backgroundImage': 'url(assets/img/sb1.jpg)'}}
                data-color="purple" data-background-color="white" 
                data-image="../assets/img/sidebar-1.jpg">
            <div className="logo">
                <div style={{'textAlign':'center', 'fontStyle':'italic'}}>
                  <Clock format={'HH:mm:ss'} ticking={true} />
                </div>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav" >
                    <li className="nav-item ">
                        <NavLink to="/pocetna" exact={true} className="nav-link"  activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white', 'fontWeight':'bold'}}>
                            <MaterialIcon icon="dashboard" />
                            <Translate id="homePage"></Translate>
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/listaKorisnika" exact={true} className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold'}}>
                            <i className="material-icons">person</i>
                            <Translate id="userList"></Translate>
                        </NavLink>
                    </li>


                    <li className="nav-item ">
                        <NavLink to="/dodajKorisnika" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">person_add</i>
                            <Translate id="userAdd"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink to="/listaZaduzenja" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">note</i>
                            <Translate id="accountList"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink to="/dodajZaduzenje" className="nav-link" activeStyle={{ 'backgroundColor': '#9c27b0', 'color':'white','fontWeight':'bold' }}>
                            <i className="material-icons">note_add</i>
                            <Translate id="accountAdd"></Translate>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <div className="nav-link">
                            <Select 
                                onChange={this.onChangeLanguage}
                                options={languageInSelect}
                                defaultValue={{label: 'Latinica', value: 'lt'}}
                            />
                        </div>
                    </li>
                </ul>

            </div>
        </div>
        )
    }
}

export default withLocalize(Sidebar)