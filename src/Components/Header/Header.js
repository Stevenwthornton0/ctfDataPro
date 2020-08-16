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
            photos: false,
            drop: false,
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

    dropDown = () => {
        this.setState({
            drop: !this.state.drop
        })
    }

    
    render() {
        
        return(
            <div className='top'>
                <h1 onClick={this.returnHome} className='logo'>CTF Data Pro</h1>

                <div className='navBar'>

                    {this.state.home 
                        ? <Link onClick={this.onClickHome} className='outline clicked' to='/'>Home</Link> 
                        : <Link onClick={this.onClickHome} to='/'>Home</Link>}

                    {/* {this.state.services  
                        ? <Link onClick={this.onClickServices} className='outline clicked' to='/services'>Services</Link>
                        : <Link onClick={this.onClickServices} to='/services'>Services</Link>} */}

                    <div onClick={this.dropDown} className='dropDown'>
                        <p>Services</p>
                        {this.state.drop && <div id='dropContainer'>
                            <Link to='/services/cellphone'>Cell Phone Forensics</Link>
                            <Link to='/services/gps'>GPS Forensics</Link>
                            <Link to='/services/celltower'>Cell Tower Analysis</Link>
                            <Link to='/services/password'>Password Recovery</Link>
                        </div>}
                    </div>

                    {this.state.documents 
                        ? <Link onClick={this.onClickDocuments} className='outline clicked' to='documents'>Documents</Link> 
                        : <Link onClick={this.onClickDocuments} to='documents'>Documents</Link>}

                    {this.state.contact 
                        ? <Link onClick={this.onClickContact} className='outline clicked' to='/contact'>Contact</Link>
                        : <Link onClick={this.onClickContact} to='/contact'>Contact</Link>}

                    {this.state.photos 
                        ? <Link onClick={this.onClickPhotos} className='outline clicked' to='/photos'>Photos</Link> 
                        : <Link onClick={this.onClickPhotos} to='/photos'>Photos</Link>}
                    
                </div>
            </div>
        )
    }
}

export default Header;