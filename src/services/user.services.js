// import { authHeader } from '../helps/auth-header';
import axios from 'axios';
export const userService = {
    login
}

function login(username, password) {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password })
    // };
    return axios({
            method: "POST",
            url: 'http://localhost:8080/users/authenticate',
            data: {
                username: username,
                password: password
            }
        }).then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user.data;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                console.log("no ra 401 nhe")
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    })
}