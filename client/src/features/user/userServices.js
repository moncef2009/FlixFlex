import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
    console.log(userData);
    const response = await axios.post(API_URL, userData)
    return response.data
}

//Logout user
const logout = async () => {
    await axios.get(API_URL + 'logout')
}



//Login user 
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    return response.data

}

const favory = async (data) => {
    await axios.put(API_URL + `favory`, data)
}

const unfavory = async (data) => {
    await axios.put(API_URL + `unfavory`, data)
}

const getFavory = async (id) => {
    const response = await axios.get(API_URL + `getfavory`)
    return response.data.favory
}
const userServices = {
    register, logout, login, favory, unfavory, getFavory
}

export default userServices