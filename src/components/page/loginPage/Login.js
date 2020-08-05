import React from 'react';
import { connect } from 'react-redux';
import '../../../styles/Login.css';
import {Link} from 'react-router-dom';
import { userActions } from '../../../actions/user.action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <>
        <div className="login_space">
          <div className="login_page">
            <div className="form">
              <div className="ad_logo">
                <h2 className="font-italic">Ad setting</h2>
              </div>
              <form className="login_form" onSubmit={this.handleSubmit}>
                <div className={(submitted && !username ? ' has-error' : '')}>
                  <label htmlFor="username">User name:</label>
                  <input type="text"
                    name="username"
                    placeholder="Username"
                    pattern="[a-z]{1,15}"
                    title="Username chỉ chứa chữ cái viết thường và nhiều nhất 15 kí tự" 
                    onChange={(event) => { this.setState({ username: event.target.value }) }} />
                  {submitted && !username &&
                    <div className="help-block">Username không hợp lệ</div>
                  }
                </div>
                <div className={(submitted && !password ? ' has-error' : '')}>
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" placeholder="password" pattern="[a-z0-9]{0-8}" title="password phải trên 8 kí tự ví dụ test1234" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                  {submitted && !password &&
                    <div className="help-block">Password không hợp lệ</div>
                  }
                </div>
                <div>
                  <Link to="/homepage">
                  <button>login</button>
                  {loggingIn &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="wait" />
                  }
                  </Link>
                </div>


              </form>
            </div>
          </div>
        </div>

      </>);
  }
}
const mapStateToProps = (state) => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  }
};

export default connect(mapStateToProps)(Login);