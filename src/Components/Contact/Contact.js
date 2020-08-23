import React from 'react';
import ClickedContext from '../../contexts/context';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import './Contact.css';

class Contact extends React.Component {
    static contextType = ClickedContext

    constructor(props) {
        super(props)
        this.state = {
            thankYou: false,
            waiting: false,
            form: true
        }
    }

    componentDidMount() {
        this.context.onClickContact();
    }
 
    thankYou = ev => {
        ev.preventDefault();
        this.setState({ waiting: true, form: false })
        setTimeout(function() {
            this.setState({ waiting: false });
            this.setState({ thankYou: true })
        }.bind(this), 2000);

    }

    render() {
        return (
            <div>

                {this.state.waiting &&
                    <div className='spinner'>
                        <LoaderSpinner />
                    </div>
                }

                {this.state.thankYou && 
                    <div className='responseContainer'>
                        <div className='response'>
                            <h2>Thank you for reaching out!</h2>
                            <div className='underline'/>
                            <p>We will contact you shortly for a free initial consultation</p>
                        </div>
                    </div>
                }

                {this.state.form &&
                    <div className='contactContainer'>
                        <h2>Contact Us</h2>
                        <form id="contact-form" onSubmit={this.thankYou}>
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <input type="text" name="user_name" placeholder="John Smith"/>
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="example@email.com"/>
                            <label>Phone Number</label>
                            <input type="phone" name="user_phone" placeholder="123-456-7890"/>
                            <label>Message</label>
                            <textarea name="message" rows='6' placeholder="Type your email here"></textarea>
                            <input className='submit' type="submit" value="Send" />
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Contact;