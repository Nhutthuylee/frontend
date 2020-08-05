import { combineReducers } from 'redux';
// import login from '../reducers/loginReducer';
import alert from '../reducers/alert.reducer';
import authentication from '../reducers/authentication.reducer';
const appReducers = combineReducers({
    alert,
    authentication
});
export default appReducers;