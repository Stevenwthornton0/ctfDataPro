import React from 'react';
import ClickedContext from '../../contexts/context';

class Photos extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickPhotos();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Photos;