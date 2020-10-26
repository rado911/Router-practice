import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import HTML from './HTML';
import CSS from './CSS';
import JS from './JS';
import './Router.css';



const Router = () => {
    return (
        <div>
            < Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/HTML' component={HTML} />
                <Route path='/CSS' component={CSS} />
                <Route path='/js' component={JS} />
            </Switch>
        </div>
    )
}

export default Router;