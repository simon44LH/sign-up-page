import axios from 'axios';

export const singup = (user) =>{
return axios.post('/api/1.0/users', user)
};