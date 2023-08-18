import axios from "axios"

export const login = async (loginData) => {
    const response = await axios.post('https://dummyjson.com/auth/login', JSON.stringify(loginData) , {
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return response.data
}