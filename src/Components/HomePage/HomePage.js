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

                <div class="homeHero primarySection">
                    
                    <div class="phoneWrap">
                        <img className='phone' src={photo} alt="phone"/>
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
                    <div class="container">
                        <h1>Ooh, what a great section this is!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac metus tincidunt, eleifend dolor sed, dictum tellus. Integer at interdum orci, nec convallis est. Nullam pretium mi in justo consectetur, id dapibus massa condimentum. Integer feugiat semper nulla, interdum vestibulum nibh porttitor molestie. Ut sed nulla arcu. Vivamus velit purus, ornare non velit eu, tincidunt sodales eros. Curabitur vitae elit molestie, bibendum leo nec, semper orci. Pellentesque sed purus nec neque aliquam blandit. In scelerisque eros vel augue rhoncus placerat. Curabitur diam justo, ullamcorper bibendum sem ac, pretium congue mauris. Nam malesuada mauris neque, eu tempor purus congue ac.</p>
                    </div>
                </div>

                <div className='background4 primarySection' id='cellTower'>
                    <div class="container clearfix">
                        <h2 class="float-left">I like this section even more.</h2>
                        <h2 class="float-left">Why? Because it has floats?</h2>
                    </div>
                </div>

                <div className='background3 primarySection' id='passwordRec'>
                    <div class="container">
                        <h1>This section has three equal columns.</h1>
                        <div class="row">
                            <div class="col-33">
                                <h3>One</h3>
                            </div>
                            <div class="col-33">
                                <h3>Two</h3>
                            </div>
                            <div class="col-33">
                                <h3>Three</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage;
