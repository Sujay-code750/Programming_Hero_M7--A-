import React from 'react';
import FriendHooks from '../../friendHook/FriendHooks';
import { SyncLoader } from 'react-spinners';
import FriendCard from '../FriendCard';

const Friends = () => {

      // custom hook
  const {friends, loading} = FriendHooks();
    return (
        <div className='bg-[#f8fafc] py-10'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-left text-2xl font-bold mb-5'>Your friends</h1>
                </div>
               {
                loading ? ( 
                    <div className='flex justify-center items-center h-[20vh]'>
                        <SyncLoader />
                    </div>
                ) :
                (
                     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                 friends.map((friend, index) =>{
                    return <FriendCard friend={friend} key={index}></FriendCard>
                 })
                }
                </div>
                )
               }
            </div>
        </div>
    );
};

export default Friends;