import React, { useContext, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
    children: JSX.Element
}

export type UserData = {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    birthdate: string,
    gender: string,
    profile_picture: string,
    is_active: boolean,
};

const userContext = createContext<UserData>({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    profile_picture: "",
    is_active: false
});

export const userDefault: UserData = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    profile_picture: "",
    is_active: false
}

const UserProvider: React.FC<Props> = ({ children }) => {
    let user: UserData
    const storedUser = AsyncStorage.getItem('user');
    storedUser.then((result) => {
        user = result !== undefined? JSON.parse(result) : userDefault
    })

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

const saveContext = (user: UserData) => {return AsyncStorage.setItem('user', JSON.stringify(user))}

const useUserContext = () => {return useContext(userContext);}

export {UserProvider, useUserContext, userContext, saveContext}