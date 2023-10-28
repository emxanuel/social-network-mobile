import React, { useContext, createContext, useEffect, useState, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Props {
    children: JSX.Element
}

enum Actions {
    SET_USER = "SET_USER"
}

interface userActions {
    type: Actions,
    payload: UserData
}

type userState = UserData

type userContextType = {
    user: UserData,
    setUser: (user: userState) => void
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

const userContext = createContext<userContextType | undefined>(undefined)

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


const userReducer = (state: userState, action: userActions) => {
    switch (action.type) {
        case Actions.SET_USER:
            saveContext(action.payload)
            return {
                ...state = action.payload,
            }
        default: 
            return state;
    }
}

const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, userDispatch] = useReducer(userReducer, userDefault)

    const setUser = (user: userState) => {
        userDispatch({type: Actions.SET_USER, payload: user})
    }

    return (
        <userContext.Provider value={{user: user, setUser}}>
            {children}
        </userContext.Provider>
    );
}

const saveContext = (user: UserData) => { console.log(user); AsyncStorage.setItem('user', JSON.stringify(user)) }

const useUserContext = () => { return useContext(userContext); }

export { UserProvider, useUserContext, userContext, saveContext }