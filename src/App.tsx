import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Header } from 'common/components/Header';
import { HeroDetailsContainer } from 'modules/heroes/containers/HeroDetailsContainer';
import { HeroSelectContainer } from 'modules/heroes/containers/HeroSelectContainer';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    main {
        max-width: 1600px;
        margin: 0 auto;
    }
`;

export const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Header />

        <Switch>
            <Route path="/" exact>
                <HeroSelectContainer />
            </Route>
            <Route path="/hero/:heroId" exact>
                <HeroDetailsContainer />
            </Route>
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
);
