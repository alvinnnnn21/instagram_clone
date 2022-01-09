import Post from "./Post"
import { useState, useEffect } from 'react';
import { Posts as PostsSkeletonLoader } from './Skeleton Loader/';
import { onSnapshot, collection, query, orderBy, where } from '@firebase/firestore';
import { db } from '../firebase';
import { useSession } from "next-auth/react";

const Posts = () => {

    const { data: session } = useSession();

    const[posts, setPosts] = useState([]);

    useEffect(() => 

        onSnapshot(
            query(
                collection(db, "posts"), 
                orderBy("timestamp", "desc")
            ), (snapshot) => 
            {
                setPosts(snapshot.docs);
            }   
        ) ,         
    [db]);

    return (
        <div>
            {
                posts.map((post) => (
                    <Post 
                    key={post.id} 
                    id={post.id}
                    username={post.data().username} 
                    userImg={post.data().profileImage} 
                    img={post.data().image} 
                    caption={post.data().caption}
                />
                ))
            }
        </div>
    )
}

export default Posts
