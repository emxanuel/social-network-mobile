import axios from "axios";
import { server } from "../backend";
import React from "react";

export type message = {
    id: number;
    sender: number;
    recipient: number;
    content: string;
    date_sent: string;
};

const getChat = async (
    user: number,
    friend: number,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setChat?: React.Dispatch<React.SetStateAction<message[]>>
) => {
    try{
        const request = await axios.get(`${server}/api/chat/${user}/${friend}`);
        if (request.status === 200) {
            setChat(request.data);
        }
    }
    catch(e){
        console.log(e)
    }
    finally{
        setLoading(false)
    }
};

export { getChat };
