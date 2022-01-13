import React from "react";
import "../../assets/css/main.scss";
import "../sidebar/Sidebar";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/Footer";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "../home/Home";
import Photos from "../photos/Photos";
import CV from "../cv/CV";
import Blog from "../blog/Blog";
import Projects from "../projects/Projects";
import NotFound from "../404/NotFound";
import FiscalCode from "../apps/FiscalCode";
import CodiceFiscale from "../apps/FiscalCode_it";
import Recipes from "../recipes/Recipes";
import PhotoData from "../photos/data/AlbumData";

import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import AlbumDisplay from "../photos/item/AlbumDisplay";
import AlbumDisplayFunc from "../photos/item/AlbumDisplayFunc";
import AlbumDisplayFunc2 from "../photos/item/AlbumDisplayFunc2";

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
                    <Sidebar/>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/cv" element={<CV/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/photos" element={<Photos/>}/>
                            <Route path="/recipes" element={<Recipes/>}/>
                            <Route path="/blog" element={<Blog/>}/>
                            <Route path="/apps/fiscal-code" element={<FiscalCode/>}/>
                            <Route path="/apps/codice-fiscale" element={<CodiceFiscale/>}/>
                            <Route path="*" element={<NotFound/>}/>

                            {PhotoData && PhotoData.map(
                                (config, i) => <Route key={`route-${i}`} path={`/photos/${config.id}`} element={
                                    <AlbumDisplayFunc id={config.id}
                                                  flag={config.flag}
                                                  title={config.title}/>
                                }/>
                            )}
                        </Routes>
                    </div>

                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
