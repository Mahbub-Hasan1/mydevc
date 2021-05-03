import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "../Pages/Index";
import PageNotFound from "../Pages/PageNotFound";
import Blogs from '../Pages/Blogs/Blogs';
import ServicesPage from "../Pages/ServicesPage";
import Projects from '../Pages/Projects';
import Navbar from '../Components/ShareComponents/Navbar/Navbar.js'

const Routes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/blogs">
                        <Blogs />
                    </Route>
                    <Route path="/services">
                        <ServicesPage />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/">
                        <Index />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routes;