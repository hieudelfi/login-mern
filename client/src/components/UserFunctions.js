import axios from 'axios';

export const  register = newUser => {
    return axios
    .post('users/register', {
        fist_name: newUser.fist_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
    .then( res => {
        console.log('Regsitered!')
    })
    .catch(err => {
        console.log('register failed')
    })
}

export const login = user  => {
    return axios
    .post('users/login', {
        email: user.email,
        password: user.password
    })
    .then( res => {
        localStorage.setItem('usertoken', res.data)
        return res.data
    })
    .catch(err => console.log(err))
}

export const getProfile = user => {
    return axios
    .get('users/profile', {
        //headers: {Authorization: ` ${this.getToken()}` }
    })
    .then(res => {
        console.log(res)
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}