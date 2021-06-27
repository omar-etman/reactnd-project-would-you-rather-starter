import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render(){
        // login = (e) => {
        //     e.preventDefault()
        //     //handleLogin
        // }

        return(
            <div>
                login
            </div>
        )
    }
}

export default connect()(Login)