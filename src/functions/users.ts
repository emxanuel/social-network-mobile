import { Alert } from "react-native";
import { server } from "../backend";

const login = async (email: string, password: string) => {
    const request = await fetch(`${server}/api/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            "meta-charset": "utf-8",
            "Content-Type": "application/json"
        }
    }).then((response) => {
        alert(response.json())
    })
};

export { login };
