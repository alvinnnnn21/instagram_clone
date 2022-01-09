import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { onSnapshot, collection, query } from 'firebase/firestore';
import { db } from '../firebase';
import Header from './../components/Header';
import Profile from '../components/Profile';

const profile = () => {

    const { data:session } = useSession();

    useEffect(() => {}
    , []);

    return (
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Header/>
        
            <Profile/>
        </div>
    )
}

export default profile
