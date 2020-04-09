import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import loading from 'assets/img/loading.gif';

const HomePage = lazy(() => import('pages/homePage'));
const Resume = lazy(() => import('pages/resume'));

const Routes = React.memo(() => {
    return (
        <Suspense
            fallback={
                <div className="grid-full-height">
                    <img src={loading} alt="loading" />
                </div>
            }
        >
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/resume" component={Resume} />
            </Switch>
        </Suspense>
    )
});


export default Routes;