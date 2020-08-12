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
        return(
            <div className='top'>
                <h1 onClick={this.returnHome} className='logo'>CTF Data Pro</h1>

                <div className='navBar'>
                    {this.state.home ? <Link onClick={this.onClickHome} className='outline' to='/'>Home</Link> : <Link onClick={this.onClickHome} to='/'>Home</Link>}

                    {this.state.services ? <Link onClick={this.onClickServices} className='outline' to='/services'>Services</Link> : <Link onClick={this.onClickServices} to='/services'>Services</Link>}

                    {this.state.documents ? <Link onClick={this.onClickDocuments} className='outline' to='documents'>Documents</Link> : <Link onClick={this.onClickDocuments} to='documents'>Documents</Link>}

                    {this.state.contact ? <Link onClick={this.onClickContact} className='outline' to='/contact'>Contact</Link> : <Link onClick={this.onClickContact} to='/contact'>Contact</Link>}

                    {this.state.photos ? <Link onClick={this.onClickPhotos} className='outline' to='/photos'>Photos</Link> : <Link onClick={this.onClickPhotos} to='/photos'>Photos</Link>}
                </div>
            </div>
        )
    }
}

export default Header;