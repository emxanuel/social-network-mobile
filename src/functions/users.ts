import { server } from "../backend";
import axios from "axios";
import { saveContext, useUserContext } from "../components/UserContext";
import { useNavigate } from "react-router-native";

const login = async (email: string, password: string) => {
    const navigate = useNavigate()
    const request = await axios.post(`${server}/api/login`, {
        email: email,
        password: password
    })
    const data = request.data[0]['count(*)']
    if(data === 1){
        const id = request.data[0].id as number
        console.log(id)
        getUserById(id).then(result => {
            saveContext(result)
            navigate('/')
        })
    }
    else{
        alert('email or password incorrect')
    }
};

const getUserById = async (id: number) => {
    const request = await axios.get(`${server}/api/users/${id}`)

    return request.data[0]
}

export { login };
