import React from 'react';
import ClickedContext from '../../contexts/context';
import './GPS.css';

class GPS extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickServices();
    }

    render() {
        return (
            <div className='GPS'>
                <h1>GPS Forensics</h1>
                <div className='underline1'></div>
                <p>Many folks don't think about those little units that most of us have on our cars. We think of them as mobile maps to help us get to our locations.</p>
                <p>But these little devices have a wealth of information stored in them. We can help in the retrieval of that information. The data can include:</p>
                <ul>
                    <li>Route traveled</li>
                    <li>Location stopped</li>
                    <li>Time of arrival and departure from a particular location</li>
                    <li>Pre-programmed routes and journeys</li>
                </ul>

                <p>This data can be retrieved and plotted on maps like Google Earth for you to review and to be utilized in criminal and civil cases. Like all our other forensics works you get the data on a CD with links to all of your information.</p>
            </div>
        )
    }
}

export default GPS;