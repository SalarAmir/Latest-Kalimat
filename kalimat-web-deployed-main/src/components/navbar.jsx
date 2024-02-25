import React from 'react';
import { useEffect } from 'react';
import {gapi} from 'gapi-script';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact';
import GLoginButton from './buttons/g_login_button';
import GLogoutButton from './buttons/g_logout_button';
import './Navbar.css';

const clientId = '467769474365-subo3k3h1cbp63u3pec5f4q6etdmtuqq.apps.googleusercontent.com'

const Navbar = () => {
    useEffect(() => {
        function start(){
          gapi.client.init({
            clientId: clientId,
            scope: ''
          })
        }
        
        gapi.load('client:auth2', start)
        
        if (gapi.auth ){
          if(gapi.auth.getToken() ){
            var accessToken = gapi.auth.getToken().access_token
            console.log("access_token:",accessToken)
          }
        }
        else{
          console.log("Nope")
        }
        // var accessToken = gapi.auth.getToken().access_token
        // console.log("accesToken: ", accessToken)
      })
    return (
        <Router>
            <nav className="navbar">
                <div className="navbar-section">
                    <GLoginButton />
                </div>
                <div className="navbar-section">
                    <a className="navbar-link" href="/">اسعار</a>
                    <a className="navbar-link" href="/contact">مميزات</a>
                    <a className="navbar-link" href="/contact">شرح</a>
                </div>
                <div className="navbar-section">
                    <img className="navbar-logo" src="logo2.png" alt="Logo" />
                    <span className="navbar-text">KALIMAT</span>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default Navbar;
