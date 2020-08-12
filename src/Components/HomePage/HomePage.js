import React from 'react';
import './HomePage.css';
import photo from '../../Photos/Phone.jpg'

class HomePage extends React.Component {

    sectionClick1 = () => {
        const elmnt = document.getElementById('cellPhone');
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
                <img className='phone' src={photo} alt="phone"/>

                <div className='background2'></div>

                <div className='homeText'>
                    <h2 className='first' onClick={this.sectionClick1}>Cell Phone & GPS Forensics</h2>

                    <div className='line'></div>

                    <h2 onClick={this.sectionClick2}>Cell Tower Analysis</h2>

                    <div className='line'></div>

                    <h2 onClick={this.sectionClick3}>Password Recovery</h2>
                </div>

                <div className='background3' id='cellPhone'>

                </div>

                <div className='background4' id='cellTower'>

                </div>

                <div className='background5' id='passwordRec'>

                </div>

            </div>
        )
    }
}

export default HomePage;