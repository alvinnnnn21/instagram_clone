import { useEffect, useState } from 'react';
import Story from './Story';
import Axios from 'axios';
import {Stories as SkeletonLoader} from './Skeleton Loader/';

const Stories = () => {

    const[profiles, setProfiles] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        getFakeProfiles().then((res) => {
            setProfiles(res);
        })

    }, []); 

    const getFakeProfiles = async () => {
        let profiles_temp = [];

        await Axios.get("https://randomuser.me/api/?results=200")
            .then((res) => {
                const data = res.data.results;

                data.map((item, i) => {
                    profiles_temp.push({
                        id: i,
                        username: item.name.first,
                        avatar: item.picture.medium
                    })
                })

            }).catch((err) => {
                
            }).finally(() => {
                setLoading(false);
            })

        return profiles_temp;
    }

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rouded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {
                !loading 
                ?
                profiles.map((profile, i) => (
                    <Story key={i} avatar={profile.avatar} username={profile.username} />
                ))
                :
                <SkeletonLoader/>
            }
        </div>
    )
}

export default Stories
