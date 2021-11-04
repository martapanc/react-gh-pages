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
import Recipes from "../recipes/Recipes";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB3Z5VklMrzH6OPN37Gxwlm1B2ysONAxmA",
    authDomain: "react-7f58d.firebaseapp.com",
    databaseURL: "https://react-7f58d.firebaseio.com",
    projectId: "react-7f58d",
    storageBucket: "react-7f58d.appspot.com",
    messagingSenderId: "455632545837",
    appId: "1:455632545837:web:9965ea20a7b84b27cd30a4",
    measurementId: "G-182HBEBJGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics.app.automaticDataCollectionEnabled = true;


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
                            <Route path="/recipes" component={Recipes} />
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
