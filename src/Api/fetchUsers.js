import axios from "axios";
// enable cors in aws api gateway , set headers for response
export const fetchUsers = async() => {
    // return await axios.get('http://localhost:5000/users/').then((res) => res.data);
    return await axios.get(process.env.REACT_APP_USERS_API).then((res) => res.data);
}

export const addUsers = async(user) => {
    // return await axios.post('http://localhost:5000/users/add',user).then((res) => res.data);
    return await axios.post(process.env.REACT_APP_USERS_API,user).then((res) => res.data);
}