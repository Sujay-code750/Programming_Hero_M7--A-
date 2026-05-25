import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const FriendProvider = ({children}) => {

     const [callFriend, setCallFriend] = useState([]);
     const [messageFriend, setMessageFriend] = useState([]);
     const [videoCallFriend, setVideoCallFriend] = useState([]);

    return (
        <FriendContext.Provider  value={{ callFriend, setCallFriend, messageFriend, setMessageFriend, videoCallFriend, setVideoCallFriend}}>{children}</FriendContext.Provider>
    );
};

export default FriendProvider;