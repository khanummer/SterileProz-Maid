import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div className="Header">
                <div className="Header-Left">Sterile Proz Maid Services</div>
                <div className="Header-Left">Logo</div>
                <div className="Header-Right">FB IG TWITTER</div>
                <div className="Header-Right">1-(800)-500-8246 Call Today!</div>
                <div className="Header-Right">Get a free quote today</div>
            </div>

        )
    }
}

export default Header;