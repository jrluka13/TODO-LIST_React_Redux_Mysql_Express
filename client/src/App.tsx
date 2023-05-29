import React, {useEffect} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {IntlProvider} from "react-intl";
import locales from "./locales/locales";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import {SwitchContext} from "./context/SwitchContext";
import {connect} from "react-redux";
import {ICheckReducerPayload} from "../interfaces/payloadReducer.interface";
import {UPDATE_LOCALE} from "./redux/actions/actions";

const messages = {
    [locales.RU]: ru,
    [locales.EN]: en,
};

const App: React.FC = (props: any) => {
    useEffect(()=> {
        console.log(props)
    })
    function updateLocale(value: boolean) {
        if (value) {
            localStorage.setItem("locale", locales.RU);
            props.updateLocale(locales.RU);
        } else {
            localStorage.setItem("locale", locales.EN);
            props.updateLocale(locales.EN);
        }
    }

    return (
        <>
            <IntlProvider locale={props.appState.currentLocale}
                          messages={messages[props.appState.currentLocale]}>
                <SwitchContext.Provider value={{checked: props.appState.checked}}>
                    <BrowserRouter>
                        <Navbar onChange={updateLocale}/>
                        <div className="container">
                            <Switch>
                                <Route component={TodosPage} path="/" exact/>
                                <Route component={AboutPage} path="/about"/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </SwitchContext.Provider>
            </IntlProvider>
        </>
    );
};

function MapDispatchToProps(dispatch: (arg0: ICheckReducerPayload) => void) {
    return {
        updateLocale: (value: string) => dispatch({type: UPDATE_LOCALE, payload: value})
    }
}

export default connect(state => state, MapDispatchToProps)(App);
