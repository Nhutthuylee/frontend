import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/page/homePage/body/Homepage';
import Login from './components/page/loginPage/Login';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()
function App() {
    return ( 
        
    <div className = "App" >
        <Router history={history}>
            <Switch>
                {/* <Route path="/signout" exact component={Login}></Route>
                <Route path="/homepage" exact component={Homepage}></Route>
                <Route path="/homepage/account" exact component={Homepage}></Route> */}
                <Route path="/" component={Homepage}></Route>
            </Switch>
        </Router>
        
        </div>
    );
}

export default App;
