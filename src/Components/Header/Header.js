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

    onClickHome = () => {
        this.setState({
            home: true,
            documents: false,
            services: false,
            contact: false,
            photos: false
        })
    }

    onClickServices = () => {
        this.setState({
            home: false,
            documents: false,
            services: true,
            contact: false,
            photos: false
        }) 
    }

    onClickDocuments = () => {
        this.setState({
            home: false,
            documents: true,
            services: false,
            contact: false,
            photos: false
        }) 
    }

    onClickContact = () => {
        this.setState({
            home: false,
            documents: false,
            services: false,
            contact: true,
            photos: false
        }) 
    }

    onClickPhotos = () => {
        this.setState({
            home: false,
            documents: false,
            services: false,
            contact: false,
            photos: true
        }) 
    }

    
    render() {
        const { pathname } = window.location;
        let home = null;
        let services = null;
        let documents = null;
        let contact = null;
        let photos = null;

        if (pathname === '/') {
            home = true
        } else { home = false }

        if (pathname === '/services') {
            services = true
        } else { services = false }

        if (pathname === '/documents') {
            documents = true;
        } else { documents = false }

        if (pathname === '/contact') {
            contact = true;
        } else { contact = false }

        if (pathname === '/photos') {
            photos = true;
        } else { photos = false }
        
        return(
            <div className='top'>
                <h1 onClick={this.returnHome} className='logo'>CTF Data Pro</h1>

                <div className='navBar'>

                    {home || this.state.home ? <Link onClick={this.onClickHome} className='outline clicked' to='/'>Home</Link> : <Link onClick={this.onClickHome} to='/'>Home</Link>}

                    {this.state.services  ? <Link onClick={this.onClickServices} className='outline clicked' to='/services'>Services</Link> : <Link onClick={this.onClickServices} to='/services'>Services</Link>}

                    {this.state.documents ? <Link onClick={this.onClickDocuments} className='outline clicked' to='documents'>Documents</Link> : <Link onClick={this.onClickDocuments} to='documents'>Documents</Link>}

                    {this.state.contact ? <Link onClick={this.onClickContact} className='outline clicked' to='/contact'>Contact</Link> : <Link onClick={this.onClickContact} to='/contact'>Contact</Link>}

                    {this.state.photos ? <Link onClick={this.onClickPhotos} className='outline clicked' to='/photos'>Photos</Link> : <Link onClick={this.onClickPhotos} to='/photos'>Photos</Link>}

                    <div className='animation start-home'></div>
                    
                </div>
            </div>
        )
    }
}

export default Header;