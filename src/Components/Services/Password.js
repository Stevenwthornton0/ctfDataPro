import React from 'react';
import ClickedContext from '../../contexts/context';
import './Password.css';

class Password extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickServices();
    }

    render() {
        return (
            <div className='password'>
                <div className='recoverySection'>
                    <h1>Password Recovery Services</h1>
                    <div className='underline1'></div>

                    <p>Imagine for a moment that you have just fired one of your employees. He or she becomes irate and decides to change the password to some of your key files, possibly your company QuickBooks financial records or some key Word or Excel documents. Or imagine that a client you have not done business with in years wants to reopen their files, but those files were password protected by someone who left your company years ago and no one knows the password to open the files</p>

                    <p>The above scenarios may seem hopeless, but all is not lost. The forensics examiners at Aguero Investigations are able to work miracles with many types of files and are able to retrieve the lost password and get you an unprotected copy of the document or file.</p>

                    <p>Before you spend countless hours duplicating the work contained in the files you believe are lost call Aguero Investigations. We can save you time, money and energy with a quick password recovery services.</p>
                </div>

                <div className='background3'>
                    <div className='recoverySection list'>

                        <h1>Supported File Types</h1>
                        <div className='underline'></div>

                        <div className='listContainer'>
                            <ul>
                                <li>Acrobat</li>
                                <li>ACT!</li>
                                <li>FileMaker</li>
                                <li>ICQ</li>
                            </ul>
                            <ul>
                                <li>Lotus 1-2-3</li>
                                <li>Lotus WordPro</li>
                                <li>MS Money</li>
                                <li>Norton Backup</li>
                            </ul>
                            <ul>
                                <li>Microsoft Office</li>
                                <li>Microsoft Word</li>
                                <li>Microsoft Outlook</li>
                                <li>Microsoft PowerPoint</li>
                            </ul>
                            <ul>
                                <li>Quattro Pro</li>
                                <li>QuickBooks</li>
                                <li>WordPerfect</li>
                                <li>ZIP files</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

                <div className='background4 primarySection'>
                    <div className='recoverySection'>
                        <h1>Other Password Recovery Available</h1>
                        <div className='underline1'></div>

                        <p>We can also retrieve passwords from your internet accounts and we can reset the Windows Administrators password. So if you get locked out of your computer we can reset the password and get you access to your own computer again.</p>

                        <p>All our password services are geared towards Windows based systems only.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Password;