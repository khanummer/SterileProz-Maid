import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div className="Header">
                {/* <div className="Header-1">Sterile Proz Maid Services</div> */}
                <div className="Header-1"><img className="s-logo" alt="Logo" src="../../imgs/SPMS-Logo.jpg"/></div>
                <div className="Header-3">FB IG TWITTER</div>
                <div className="Header-4">1-(800)-500-8246 Call Today!</div>
                <div className="Header-5">Get a free quote today</div>
            </div>

        )
    }
}

export default Header;