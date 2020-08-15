import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <p>&#169; 2020 CTF Data Pro Inc.</p>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}

export default Footer;
