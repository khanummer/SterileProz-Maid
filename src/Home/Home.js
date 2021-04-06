import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="Home-NavBar">
                    <div>Home</div>
                    <div>About Us</div>
                    <div>Affidavit</div>
                    <div>FAQs</div>
                    <div>Contact Us</div>
                </div>

                <div className="Home-Bubbles">
                    <div>Home Cleaning</div>
                    <div>Business Cleaing</div>
                    <div>Party Clean-Up</div>
                    <div>Moving Clean-Up</div>
                </div>
                
                <div>Your Safety is our Priority - Founded By a Doctor!</div>
                <div>VIDEO</div>
                
            </div>

        )
    }
}

export default Home;