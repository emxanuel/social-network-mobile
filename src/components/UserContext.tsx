import React, { useContext, createContext, useEffect, useState } from 'react'
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
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedUser = await AsyncStorage.getItem('user');
                if (storedUser !== null) {
                    setUser(JSON.parse(storedUser));
                } else {
                    setUser(userDefault);
                }
            } catch (error) {
                console.error('Error loading user data from AsyncStorage:', error);
                setUser(userDefault);
            }
        };

        loadUser();
    }, []);

    return (
        <userContext.Provider value={user || userDefault}>
            {children}
        </userContext.Provider>
    );
}

const saveContext = (user: UserData) => { console.log(user); AsyncStorage.setItem('user', JSON.stringify(user)) }

const useUserContext = () => { return useContext(userContext); }

export { UserProvider, useUserContext, userContext, saveContext }