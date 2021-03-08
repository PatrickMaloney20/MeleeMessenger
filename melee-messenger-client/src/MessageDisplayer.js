import React, { useEffect, useRef, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

function MessageDisplayer({ userName }) {

    const [messages, setMessages] = useState(null);
    const latestMessage = useRef(null);

    latestMessage.current = messages;

    useEffect(() => {
        fetch("https://localhost:44354/meleemessenger/messages")
        .then((res) => res.json())
        .then((json) => setMessages(json))
        .catch((err) => alert('Server could not be contacted'));
    }, []);

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:44354/hub')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                connection.on('RecieveMessage', message => {
                    const updatedMessages = [...latestMessage.current];
                    updatedMessages.push(message);
                    setMessages(updatedMessages);
                });
            });
    }, []);

    return (
        <div>
            <h5>Messages:</h5>
            {messages && messages.map(message => (<div key={message.id}>
                <p>{message.from === userName ? "Me" : message.from}: {message.content}</p>
            </div>))}
        </div>
    );
}

export default MessageDisplayer;