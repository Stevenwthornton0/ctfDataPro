import React from 'react';
import ClickedContext from '../../contexts/context';

class CellTower extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickServices();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default CellTower;