import axios from "axios";
import { server, wsServer } from "../backend";
import React from "react";
import { TMessage } from "../components/Message";

export let ws: WebSocket;

const init = () => {
    ws = new WebSocket(wsServer);
    ws.onopen = () => {
        console.log("connected");
    };
    ws.onclose = () => {
        setTimeout(() => {
            ws = new WebSocket(wsServer);
        }, 2000);
    };
};

const getChat = async (
    user: number,
    friend: number,
    setChat: React.Dispatch<React.SetStateAction<TMessage[]>>,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (setLoading) {
        try {
            const request = await axios.get(
                `${server}/api/chat/${user}/${friend}`
            );
            if (request.status === 200) {
                setChat(request.data);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    } else {
        try {
            const request = await axios.get(
                `${server}/api/chat/${user}/${friend}`
            );
            if (request.status === 200) {
                setChat(request.data);
            }
        } catch (e) {
            console.log(e);
        }
    }
};

const sendMessage = async (
    message: string,
    sender: number,
    recipient: number,
    setChat: React.Dispatch<React.SetStateAction<TMessage[]>>
) => {
    const date = new Date().toLocaleString("en-US", {
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    const request = await axios.post(
        `${server}/api/chat/${sender}/${recipient}`,
        {
            content: message.trim(),
            dateSent: date,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }
    );
    if (request.status === 200) {
        ws.send("message sent");
        await getChat(sender, recipient, setChat);
    } else {
        console.log(request.statusText);
    }
};

const getLastMessage = async (
    sender: number,
    recipient: number,
    setLastMessage: React.Dispatch<React.SetStateAction<TMessage>>,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
    if (setLoading) {
        setLoading(true);
        await axios.get(`${server}/api/chat/${sender}/${recipient}/lastmessage`)
            .then((res) => {
                if (res.data.length === 0) {
                    setLastMessage({
                        content: "send first message",
                        date_sent: new Date().toString(),
                        sender: recipient,
                        recipient: sender,
                        id: 0,
                    });
                } else {
                    setLastMessage(res.data);
                }
            })
            .catch(() => {
                setLastMessage({
                    content: "send first message",
                    date_sent: new Date().toString(),
                    sender: recipient,
                    recipient: sender,
                    id: 0,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    } else {
        await axios.get(`${server}/chat/${sender}/${recipient}/lastmessage`)
            .then((res) => {
                setLastMessage(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }
};

init();

export { getChat, sendMessage, getLastMessage };
