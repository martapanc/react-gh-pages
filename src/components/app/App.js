import React from 'react';
import '../../assets/css/main.scss';
import '../sidebar/Sidebar';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../home/Home';
import Photos from '../photos/Photos';
import Projects from '../projects/Projects';
import NotFound from '../404/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="main-wrapper">
                    <Sidebar />

                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/photos" component={Photos} />
                            <Route path="/projects" component={Projects} />
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
