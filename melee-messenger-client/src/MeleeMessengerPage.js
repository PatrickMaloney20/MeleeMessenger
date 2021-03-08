import React from 'react';

import MessageComposer from './MessageComposer';
import MessageDisplayer from './MessageDisplayer';

function MeleeMessengerPage({ userName }) {
    return (<>
        <MessageComposer userName={userName} />
        <MessageDisplayer userName={userName} />
    </>);
}

export default MeleeMessengerPage;
