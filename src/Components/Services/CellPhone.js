import React from 'react';
import ClickedContext from '../../contexts/context';
import './CellPhone.css';

class CellPhone extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickServices();
    }

    render() {
        return (
            <div className='cellPhone'>
                <div className='recoverySection'>
                    <h1>Cell Phone Forensics</h1>
                    <div className='underline1'></div>

                    <p>Cell phones today have become quite sophisticated units. They are no longer used just for making voice calls. Many of todays cell phones are in fact small computers capable of surfing the web, sending and receiving emails, text messages and multi-media messages. They can contain contact lists, pictures, video and a wealth of other information. This holds true for many cell phones as well as PDAs such as iPhones and iPads. A great deal of data is left on these devices either intentionally or without the knowledge of the user.</p>

                    <p>Law enforcement officials and legal firms realize the importance of evidence contained in cell phones, PDA and GPS units, and how this evidence can affect the outcome of the trial. Whether it is a criminal case or civil case, the integrity of the firm selected for the cell phone forensic audit is as important as the integrity of the data recovered. More and more cases are being won with the proper submittal of electronic evidence. For this reason it is imperative that the cell phone forensic investigator understand the legal issues of a case.</p>

                    <p>Our cell phone forensic examination can include a logical extraction or a full data retrieval dependent on the cell phone or PDA model. We conduct a thorough examination of the data found on the phone's SIM/USIM, the cell phone itself as well as any optional memory cards found on the phone such as MicroSD cards.</p>

                    <p>Utilizing industry standard software and hardware products like the Cellebrite UFED, Cellebrite Physical Pro, Susteen SecureView, BitPIM and others, we are able to retrieve a wealth of information. Our normal operating procedures follow industry standards and are able to be used in legal procedings in court.</p>
                </div>

                <div className='background3'>
                    <div className='recoverySection'>

                        <h1>Our Process</h1>
                        <div className='underline'></div>

                        <div className='listContainer'>
                            <ol>
                                <li>Obtain posession of the device</li>
                                <li>Document it through photos and clear documentation</li>
                                <li>Isolate the device from its network so no changes can take place. This can be accomplished through the use of a Faraday container or through cloning of the SIM chip.</li>
                                <li>Process the device to obtain the desired data</li>
                                <li>Complete a detailed report which include a hash value on the file retrieved</li>
                                <li>We provide you with a detailed report on a CD with all retrieved data</li>
                                <li>We are available to testify at depositions or court hearings as needed</li>
                            </ol>
                        </div>
                        
                    </div>
                </div>

                <div className='background4 primarySection'>
                    <div className='recoverySection'>
                        {/* <h1>Other Password Recovery Available</h1>
                        <div className='underline1'></div> */}

                        <p id='bold'>*Please note that there are thousands of different cell phones on the market with a wide variety of capabilities. The amount of data that can be retrieved from any particular cell phone will vary. Some cell phones such as pay as you go types have very limited capabilities and very little data is stored or can be retrieved. Others such as the iPhone have a wealth of information. Please contact us with your specific model of phone and we can better advise you as to what data we may be able to retrieve. Our initial consultation is always free.</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default CellPhone;