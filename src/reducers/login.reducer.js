import axios from 'axios';

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(username, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        calLoginApi(username, password, error => {
            dispatch(setLoginPending(false));
            if (!error) {
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error))
            }
        });
    }
}

function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}

function calLoginApi(username, password, callback) {
    axios({
        method: "POST",
        url: "http://localhost:8080/authenticate",
        data: {
            userName: username,
            passWord: password
        }
    }).then(

        response => {
            console.log(response.data)
            const token_ = response.data
            localStorage.setItem("token", token_);
            console.log(token_)
            axios.get('http://localhost:8080/login', {
                headers: {
                    "Authorization": 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json',
                }
            }).then(dt => {
                setTimeout(() => {
                    if (password === dt.data.password) {
                        localStorage.setItem("logined_user", JSON.stringify(dt.data))
                        return callback(null);
                    } else {
                        return callback(new Error('Invalid email and password'));
                    }
                }, 1000);
            })
        }
    )
}

export default function reducer(state = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
}, action) {
    switch (action.type) {
        case SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });
        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });
        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });
        default:
            return state;
    }
}