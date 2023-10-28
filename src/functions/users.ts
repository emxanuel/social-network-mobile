import { server } from "../backend";
import axios from "axios";
import {
    UserData,
} from "../components/UserContext";
import { NavigateFunction } from "react-router-native";
import React from "react";

const login = async (
    email: string,
    password: string,
    navigate: NavigateFunction,
    setUser: (user: UserData) => void
) => {
    await axios
        .post(`${server}/api/login`, {
            email: email,
            password: password,
        })
        .then((result) => {
            if (result.data["count(*)"]) {
                const id = result.data.id as number;
                getUserById(id).then((res) => {
                    setUser(res);
                    navigate("/");
                });
            }
        })
        .catch((e) => {
            console.log(e);
        });
};

const getUserById = async (
    id: number,
    setUser?: React.Dispatch<React.SetStateAction<UserData>>
) => {
    const request = await axios.get(`${server}/api/users/${id}`);
    if (setUser) {
        setUser(request.data);
    }
    return request.data;
};

const getContacts = async (
    setContacts: React.Dispatch<React.SetStateAction<UserData[]>>,
    id: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    try {
        const request = await axios.get(`${server}/api/users/${id}/friends`);
        setContacts(request.data);
    } catch {
        (e) => {
            console.log(e);
        };
    } finally {
        setLoading(false);
    }
};

export { login, getContacts, getUserById };
