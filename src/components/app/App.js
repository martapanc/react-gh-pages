import React from 'react';
import '../../assets/css/main.scss';
import '../sidebar/Sidebar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Home from '../home/Home';
import Photos from '../photos/Photos';
import Projects from '../projects/Projects';
import NotFound from '../404/NotFound';

function App() {
    return (
        <Router basename="/react-gh-pages">
            <div className="App">
                <div className="main-wrapper">
                    <Sidebar />

                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path={'/photos'}>
                                <Photos/>
                            </Route>
                            <Route path="/projects">
                                <Projects   />
                            </Route>
                            <Route>
                                <NotFound/>
                            </Route>
                        </Switch>
                    </div>



                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
