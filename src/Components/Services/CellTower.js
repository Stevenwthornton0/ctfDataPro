import React from 'react';
import ClickedContext from '../../contexts/context';
import './CellTower.css';

class CellTower extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickServices();
    }

    render() {
        return (
            <div className='cellTower'>
                <h1>Cell Tower Analysis</h1>
                <div className='underline1'></div>

                <p>If your case involved the use of cell tower information, you may be confused looking at all these numbers and wondering just what does it really mean.</p>

                <p>We can assist with these complex types of cases and help you sort the information and show you how it applies to your specific circumstances. We can help you decipher the various codes used, the cell tower number and sectors used.</p>

                <p>The data obtained from cell tower records can be the key that helps win or lose a case in court. We take this complex information and transform it into something you can use and easily understand.</p>
            </div>
        )
    }
}

export default CellTower;