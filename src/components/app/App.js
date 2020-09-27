import React from "react";
import "../../assets/css/main.scss";
import "../sidebar/Sidebar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/Home";
import Photos from "../photos/Photos";
import CV from "../cv/CV";
import Blog from "../blog/Blog";
import Projects from "../projects/Projects";
import NotFound from "../404/NotFound";
import FiscalCode from "../apps/FiscalCode";
import CodiceFiscale from "../apps/FiscalCode_it";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="main-wrapper">
                    <Sidebar />

                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/cv" component={CV} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/photos" component={Photos} />
                            <Route path="/blog" component={Blog} />
                            <Route path="/apps/fiscal-code" component={FiscalCode} />
                            <Route path="/apps/codice-fiscale" component={CodiceFiscale} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
