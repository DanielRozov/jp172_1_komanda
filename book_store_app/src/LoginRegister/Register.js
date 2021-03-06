import React, { Component } from 'react';
import cssKlases from './Register.css';

class registeris extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    switchDisplayHandler = () => {this.setState ({hidden:  !this.state.hidden});
        return this.state.hidden;
    };
    render ( props ) {
    return (
        <div className={this.state.hidden ? cssKlases.login_popup_hide : cssKlases.login_popup_show}>
            <div id="login_popup" className={cssKlases.header_popup}>
                <div className={cssKlases.header_login_content}>
                    <form className={cssKlases.header_modal_content}>
                        <span  onClick={this.switchDisplayHandler} className={cssKlases.header_login_close} title="Close Login Form">&times;</span>
                        <div className={cssKlases.header_container}>
                            <h3><i className="fa fa-book" /> Book Store</h3>
                            <div className={cssKlases.header_form_bordered}>
                            <h2>Register new account</h2>
                                        <label><b>Your name</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required /><br/>
                                        <label><b>Email</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required /><br/>
                                        <label><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required /><br/>
                                        <label><b>Re-enter password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required /><br/>
                                        <button className="header_submit" type="submit">Create new account</button>
                                <hr />
                                <p className={cssKlases.header_reg}>Already have an account? <span className="header_reg_to_login" >Login here.</span></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
};

export default registeris;