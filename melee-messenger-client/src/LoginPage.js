import React, { useState } from 'react';

function LoginPage({ onLoginSubmit }) {
    const [userName, setUserName] = useState('');

    const handleSubmit = (name) => {
        onLoginSubmit(userName);
    }

    return (
        <>
            <input onChange={(event) => setUserName(event.target.value)} />
            <button onClick={handleSubmit}>Start Chatting</button>
        </>
    );
}

export default LoginPage;