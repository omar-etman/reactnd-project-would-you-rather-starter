import { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render(){
        login = (e) => {
            e.preventDefault()
            //handleLogin
        }

        return(
            <div>
                <img></img>
                <form>
                    <input
                        type='text'
                        placeholder='Add Todo'
                        ref={(input) => this.input = input}
                    />
                   <button onClick={this.login}>Login</button>

                </form>
            </div>
        )
    }
}

export default connect()(Login)