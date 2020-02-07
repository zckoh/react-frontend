import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyNavBar from './components/Navbar.js';
import HomePage from './views/Home/HomePage.js';
import ProjectsPage from './views/Projects/ProjectsPage.js';
import WhatToEatPage from './views/WhatToEat/WhatToEatPage.js';
import Error404Page from './views/Error404Page';

function App() {
    return (
        <div className="content">
            <Router>
                <MyNavBar />
                <Switch>
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/projects" component={ProjectsPage} />
                    <Route exact path="/what-to-eat" component={WhatToEatPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route component={Error404Page} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
