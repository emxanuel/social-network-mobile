import { server } from "../backend";
import axios from "axios";
import { saveContext, useUserContext } from "../components/UserContext";
import { NavigateFunction } from "react-router-native";

const login = async (email: string, password: string, navigate: NavigateFunction) => {
    await axios.post(`${server}/api/login`, {
        email: email,
        password: password
    })
    .then(result => {
        if (result.data[0]["count(*)"]){
            const id = result.data[0].id as number
            getUserById(id).then((res) => {
                saveContext(res)
                navigate('/')
            })
        }
    })
    .catch(e => {
        console.log(e)
    })
};

const getUserById = async (id: number) => {
    const request = await axios.get(`${server}/api/users/${id}`)
    return request.data[0]
}

export { login };
