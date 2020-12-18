import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import SingleTodo from './SingleTodo';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/todo/:id" exact component={SingleTodo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;