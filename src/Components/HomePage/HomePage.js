import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';
import phone from '../../Photos/Phone.jpg';
import phone2 from '../../Photos/Phone2.jpg';
import tower from '../../Photos/tower.jpg';
import password from '../../Photos/Password.png';


class HomePage extends React.Component {

    sectionClick1 = () => {
        const elmnt = document.getElementById('point1');
        elmnt.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    sectionClick2 = () => {
        const elmnt = document.getElementById('cellTower');
        elmnt.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    sectionClick3 = () => {
        const elmnt = document.getElementById('passwordRec');
        elmnt.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    render() {
        return(
            <div className='HomePage'>

                <div className="homeHero primarySection">
                    
                    <div className="phoneWrap">
                        <img className='phone' src={phone} alt="phone"/>
                    </div>

                    <div className='homeText'>
                        <h2 onClick={this.sectionClick1}>Cell Phone & GPS Forensics</h2>

                        <div className='line'></div>

                        <h2 onClick={this.sectionClick2}>Cell Tower Analysis</h2>

                        <div className='line'></div>

                        <h2 onClick={this.sectionClick3}>Password Recovery</h2>
                    </div>
                </div>

                <div className='belowImageOffset background3 primarySection' id='cellPhone'>
                    <div className="container">
                        <h1>Cell Phone & GPS Forensics</h1>
                        <div className='underline'/>
                        <p>Our team of skilled Cell Phone Forensics Examiner have a wealth of skills and information to help with your case. We can provide an unbiased, independent analysis of the data on your cell phones and GPS units. We have multiple certifications and utilize multiple programs and systems to retrieve the data including the Cellebrite UFED (Universal Forensic Extraction Device) Logical Unit, the Cellebrite Physical Pro and Susteen SecureView. These systems allow us to access thousands of the cell phones on the market today and many of the GPS units.</p>
                        <p id='point1'>Some of the data we can extract from cell phones & GPS units can include:</p>
                    </div>
                    <div className='container secondarySection'>
                        <div>
                            <h3>Cell Phones</h3>
                            <ul>
                                <li>SMS (text messages)</li>
                                <li>Pictures</li>
                                <li>Videos</li>
                                <li>Contact Lists</li>
                                <li>Missed Calls</li>
                                <li>And Much More</li>
                            </ul>
                        </div>
                        <div>
                            <h3>GPS Forensics</h3>
                            <ul>
                                <li>Routes Traveled</li>
                                <li>Journeys</li>
                                <li>Saved Searches</li>
                                <li>Favorite Locations</li>
                                <li>Date & Time of Travel</li>
                                <li>Viewable in Google Earth</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className='background4 primarySection' id='cellTower'>
                    <div className="container clearfix">
                        <h1>Cell Tower Analysis</h1>
                        <div className='underline1'></div>
                        <p>Our Cell Tower Analysis services helps you with the task of reviewing the cell tower records and making sense out of something that at times can be very confusing. We can assist in isolating the items that are of use to your case and helping you fit those into the proper perspective.</p>
                    </div>
                </div>

                <div className='background3 primarySection' id='passwordRec'>
                    <div className="container">
                        <h1>Password Recovery</h1>
                        <div className='underline'></div>
                        <div className="row">
                            <div className="col-50">
                                <p id='bold'>Our Password Recovery services allow us to retrieve passwords for files such as:</p>
                                <ul>
                                    <li>Word Documents</li>
                                    <li>Excel Spreadsheets</li>
                                    <li>PDF</li>
                                    <li>QuickBooks Company Files</li>
                                    <li>and many more</li>
                                </ul>
                            </div>
                            <div className="col-50">
                                <p>This can be a life saver to retrieve the data from those files whose passwords have been forgotten or from files that were password protected by employees who have since left the company.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='background4 primarySection' id='cellTower'>
                    <div className="container clearfix row">
                        <div className='col-33'>
                            <Link to='/services'>
                                <div className='phoneWrap2'>
                                    <img className='navImg' src={phone2}></img>
                                </div>
                                <h3>Cell Phone Forensics</h3>
                            </Link>
                        </div>
                        <div className='col-33'>
                            <Link to='/services'>
                                <div className='phoneWrap2'>
                                    <img className='navImg' src={tower}></img>
                                </div>
                                <h3>Cell Towers</h3>
                            </Link>
                        </div>
                        <div className='col-33'>
                            <Link to='/services'>
                                <div className='phoneWrap2'>
                                    <img className='navImg' src={password}></img>
                                </div>
                                <h3>Password Recovery</h3>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage;
