import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';
import ClickedContext from '../../contexts/context';
import './Header.css';

class Header extends React.Component {
    static contextType = ClickedContext;

    constructor(props) {
        super(props)
        this.state = {
            drop: false,
        }
    }

    returnHome = () => {
        window.location = "/"
    }

    dropDown = () => {
        this.setState({
            drop: !this.state.drop
        })
    }

    handleOutsideClick = () => {
        this.setState({
            drop: false,
        })
    }

    
    render() {
        const { context } = this;
        return(
            <div className='top'>
                <h1 onClick={this.returnHome} className='logo'>CTF Data Pro</h1>

                <div className='navBar'>

                    {context.home 
                        ? <Link onClick={context.onClickHome} className='outline' to='/'>Home</Link> 
                        : <Link onClick={context.onClickHome} className='noOutline' to='/'>Home</Link>}

                    {context.services 
                    ? 
                        <div onClick={this.dropDown} className='dropDown'>
                            <OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
                                <p className='outline clicked'>Services &#9662;</p>
                                {this.state.drop && 
                                <div id='dropContainer'>
                                    <Link to='/services/cellphone'  onClick={context.onClickServices}>Cell Phone Forensics</Link>
                                    <Link to='/services/gps'  onClick={context.onClickServices}>GPS Forensics</Link>
                                    <Link to='/services/celltower'  onClick={context.onClickServices}>Cell Tower Analysis</Link>
                                    <Link to='/services/password' onClick={context.onClickServices}>Password Recovery</Link>
                                </div>
                                }
                            </OutsideClickHandler>
                        </div>
                    

                    : 
                        <div onClick={this.dropDown} className='dropDown'>
                            <OutsideClickHandler onOutsideClick={this.handleOutsideClick}>
                                <p className='noOutline'>Services &#9662;</p>
                                {this.state.drop && 
                                <div id='dropContainer'>
                                        <Link to='/services/cellphone'  onClick={context.onClickServices}>Cell Phone Forensics</Link>
                                        <Link to='/services/gps'  onClick={context.onClickServices}>GPS Forensics</Link>
                                        <Link to='/services/celltower'  onClick={context.onClickServices}>Cell Tower Analysis</Link>
                                        <Link to='/services/password' onClick={context.onClickServices}>Password Recovery</Link>
                                </div>}
                            </OutsideClickHandler>
                        </div>
                    }

                    {context.documents 
                        ? <Link onClick={context.onClickDocuments} className='outline' to='/documents'>Documents</Link> 
                        : <Link onClick={context.onClickDocuments} className='noOutline' to='/documents'>Documents</Link>}

                    {context.contact 
                        ? <Link onClick={context.onClickContact} className='outline' to='/contact'>Contact</Link>
                        : <Link onClick={context.onClickContact} className='noOutline' to='/contact'>Contact</Link>}

                    {/* {context.photos 
                        ? <Link onClick={context.onClickPhotos} className='outline' to='/photos'>Photos</Link> 
                        : <Link onClick={context.onClickPhotos} className='noOutline' to='/photos'>Photos</Link>} */}
                    
                </div>
            </div>
        )
    }
}

export default Header;