import React, { useEffect, useState } from 'react';

const FriendHooks = () => {
     const [friends, setFriends] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        fetch("/friends.json")
          .then((res) => res.json())
          .then((data) => {
            setFriends(data);
            setLoading(false);
          })
      }, []);


    return {friends, loading};
};

export default FriendHooks;