import { combineReducers } from 'redux';
// import login from '../reducers/loginReducer';
import alert from '../reducers/alert.reducer';
import authentication from '../reducers/authentication.reducer';
import login from '../reducers/login.reducer';

const appReducers = combineReducers({
    alert,
    authentication,
    login
});
export default appReducers;