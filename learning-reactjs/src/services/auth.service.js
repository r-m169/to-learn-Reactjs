import axios from "axios"
import { useContext } from "react"

export const login = async (loginData) => {
    const response = await axios.post('https://dummyjson.com/auth/login', JSON.stringify(loginData) , {
        headers:{
            'Content-Type': 'application/json'
        }
    })
    localStorage.setItem('isLoggedIn' , true)
    localStorage.setItem('userData' ,JSON.stringify(loginData))
    return response.data
}