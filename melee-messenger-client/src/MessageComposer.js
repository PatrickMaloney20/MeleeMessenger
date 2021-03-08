import React, { useState } from 'react';

const constructMessagePayload = (userName, messageBody) => {
    return {from: userName, content: messageBody};
}

function MessageComposer({ userName }) {
    const [messageBody, setMessageBody] = useState('');
    return (
    <>
    <textarea 
        onChange={(event) => setMessageBody(event.target.value)}
        value={messageBody}
        placeholder="type your message here"
    />
    <button onClick={() => {
        console.log('send message')
        const payload = constructMessagePayload(userName, messageBody);
        fetch('https://localhost:44354/meleemessenger/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload),
        });
        setMessageBody('');
    }}>Send</button>
    </>
    );
}

export default MessageComposer;