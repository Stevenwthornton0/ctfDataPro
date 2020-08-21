import React from 'react';
import ClickedContext from '../../contexts/context';

class Documents extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickDocuments();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Documents;