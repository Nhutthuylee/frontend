import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/Login.css';
import {Redirect} from 'react-router-dom';
import {login} from '../../../reducers/login.reducer';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    let {username, password} = this.state;
    this.props.login(username, password);
    this.setState({
      username: '',
      password: '',
    })
  }

  LoginSuccess(){
    localStorage.setItem('login','success')
      
        return <Redirect  to="/homepage"/>
        
  }
  render() {
    let {username, password} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
    return (
      <>
        <div className="login_space">
          <div className="login_page">
            <div className="form">
              <div className="ad_logo">
                <h2 className="font-italic">Ad setting</h2>
              </div>
              <form className="login_form" onSubmit={this.handleSubmit}>
                <div className={(!username ? ' has-error' : '')}>
                  <label htmlFor="username">User name:</label>
                  <input type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={(event) => { this.setState({ username: event.target.value }) }} />
                </div>
                <div className={( !password ? ' has-error' : '')}>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" placeholder="password" required onChange={(event) => { this.setState({ password: event.target.value }) }} />
                </div>

                <div>
                <div className="message">  
                            { isLoginSuccess && this.LoginSuccess() }
                            { loginError && <p>Check PassWord and Username</p> }
                            {!isLoginSuccess}
                          </div>
                  
                  <button>login</button>
                  
                  
                </div>


              </form>
            </div>
          </div>
        </div>

      </>);
  }
}
const mapStateToProps = (state) => {

  return{
      isLoginPending: login.isLoginPending,
      isLoginSuccess: login.isLoginSuccess,
      loginError: login.loginError,
  }

};

const mapDispatchToProps = (dispatch) =>{
  return {
    login: (username, password) => dispatch(login(username,password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);