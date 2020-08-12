import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            home: true,
            documents: false,
            services: false,
            contact: false,
            photos: false
        }
    }

    returnHome = () => {
        window.location = "/"
    }
    
    render() {


        return(
            <div className='top'>
                <h1 onClick={this.returnHome} className='logo'>CTF Data Pro</h1>

                <div className='navBar'>

                    <Link id='Home' to='/'>Home</Link>

                    <Link id='Services' to='/services'>Services</Link>

                    <Link id='Documents' to='/documents'>Documents</Link>

                    <Link id='Contact' to='/contact'>Contact</Link>

                    <Link id='Photos' to='/photos'>Photos</Link>


                    <div className='animation start-home'></div>
                    
                </div>
            </div>
        )
    }
}

export default Header;