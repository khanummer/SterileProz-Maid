import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="Home-NavBar">
                    <div className="Home-NavBar-1">Home</div>
                    <div className="Home-NavBar-2">About Us</div>
                    <div className="Home-NavBar-3">Affidavit</div>
                    <div className="Home-NavBar-4">FAQs</div>
                    <div className="Home-NavBar-5">Contact Us</div>
                </div>

                <div className="Home-Bubbles">
                    <div className="Home-Bubbles-1">Home Cleaning</div>
                    <div className="Home-Bubbles-2">Business Cleaing</div>
                    <div className="Home-Bubbles-3">Party Clean-Up</div>
                    <div className="Home-Bubbles-4">Moving Clean-Up</div>
                </div>
                
                <div>Your Safety is our Priority - Founded By a Doctor!</div>
                <div>VIDEO</div>

                <div>Why Choose Us?</div>
                <div></div>
            </div>

        )
    }
}

export default Home;