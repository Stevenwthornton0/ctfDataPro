import React from 'react';
import ClickedContext from '../../contexts/context';
import PDF1 from '../../Documents/Cell Forensics Guidelines.pdf';
import PDF2 from '../../Documents/celltower.pdf';
import PDF3 from '../../Documents/glossary.pdf';
import PDFPic1 from '../../Photos/CellPhoneForensics.png';
import PDFPic2 from '../../Photos/ProviderSide.png';
import PDFPic3 from '../../Photos/Glossery.png';
import './Documents.css';

class Documents extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickDocuments();
    }

    render() {
        return (
            <div className='documents'>
                <div className='headerContainer'>
                    <h1>PDF Gallery</h1>
                    
                    <p>Here are some very useful document on cell phone forensics</p>
                </div>

                <div className='underline1'/>

                <div className='pdfContainer'>
                    <a href={PDF1} target='_blank' rel="noopener noreferrer">
                        <div className='imgContainer'>
                            <img src={PDFPic1}></img>
                        </div>
                        <div className='infoContainer'>
                            <h3>Guidelines to Cell Phone Forensics</h3>
                            <p>National Institute of Standards and Technology. Detailed information on the guidelines to cell phone forensics.</p>
                        </div>
                    </a>
                </div>

                <div className='pdfContainer'>
                    <a href={PDF2} target='_blank' rel='noopener noreferrer'>
                        <div className='imgContainer'>
                            <img src={PDFPic2}></img>
                        </div>
                        <div className='infoContainer'>
                            <h3>Provider Side Cell Phone Forensics</h3>
                            <p>Small Scale Digital Device Forensics Journal. Good reference document on cell towers</p>
                        </div>
                    </a>
                </div>

                <div className='pdfContainer'>
                    <a href={PDF3} target='_blank' el='noopener noreferrer'>
                        <div className='imgContainer'>
                            <img src={PDFPic3}></img>
                        </div>
                        <div className='infoContainer'>
                            <h3>Glossary of Terms</h3>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Documents;