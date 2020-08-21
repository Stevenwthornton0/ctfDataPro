import React from 'react';
import ClickedContext from '../../contexts/context';

class Contact extends React.Component {
    static contextType = ClickedContext

    componentDidMount() {
        this.context.onClickContact();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Contact;