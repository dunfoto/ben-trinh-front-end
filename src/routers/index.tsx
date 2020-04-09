import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'pages/homePage';
import ContactMe from 'pages/contactMe';
import Resume from 'pages/resume';

const Routes = React.memo(() => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact-me" component={ContactMe} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    )
});


export default Routes;