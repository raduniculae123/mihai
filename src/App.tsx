import React from 'react';
import './App.css';
import About from "./pages/About";
import {Outlet, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import {BubblyContainer, BubblyLink} from "react-bubbly-transitions";


function App() {
    return (
        <div className="App">
            <Layout>
                <BubblyContainer />
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/despre" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
