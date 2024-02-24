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
                    <img className="navbar-logo" src="https://s3-alpha-sig.figma.com/img/6e12/9497/96bd9f16b9b2a79413769d299ad97959?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HJaaL~5tKf9NEye2canYUIGdFSm6qmxzPhv6diHShpxSxRjTuB~lNoMUfB1ypR-1B1F8MYZW1C7E2s1LcAVkodIojVkXrZjSlkgng1otxaJqg790HAahwd~76gxSRuUNa8H2PhNtEn5HZx1PsfXG~-SIQ1pjV8YuSvcGicLZcjwVOk~kMI~UD7fDMI7DiSy8cQjWsrk3LIkvkHNeQBpvWup12sNSsnTgPBhnjzFIYXzoeoOCbU~OizHCXwnR4xWj0T6yHEWdh7lIGdjPSgSIH4YBJjVIlznjD27ziXVsa5vEqocxZuZmjvxlHTskzRHXsb4noAydm2yA~9T9voW2TA__" alt="Logo" />
                    <span className="navbar-text">صفحة شخصية</span>
                    <GLoginButton />
                    <GLogoutButton />
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
