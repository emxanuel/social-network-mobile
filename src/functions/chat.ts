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
    setChat?: React.Dispatch<React.SetStateAction<message[]>>
) => {
    const request = await axios.post(`${server}/api/chat/${user}/${friend}`);
    if (request.status === 200) {
        console.log(request.data);
        setChat(request.data);
    }
};

export { getChat };
