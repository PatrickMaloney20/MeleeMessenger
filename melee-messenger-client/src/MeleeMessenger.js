import React, { useState } from 'react';
import './index.css';

import LoginPage from './LoginPage';
import MeleeMessengerPage from './MeleeMessengerPage';

function MeleeMessenger() {
    const [userName, setUserName] = useState(null);
    if (!userName)
        return <LoginPage onLoginSubmit={setUserName} />;
    return <MeleeMessengerPage userName={userName} />;
}

export default MeleeMessenger;
