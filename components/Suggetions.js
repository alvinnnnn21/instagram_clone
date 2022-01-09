import { useEffect, useState } from 'react';
import Axios from 'axios';
import Suggestion from './Suggestion';
import { Suggestions as SuggestionSkeletonLoader } from './Skeleton Loader/';

const Suggetions = () => {

    const[profiles, setProfiles] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        getFakeProfiles().then((res) => {
            setProfiles(res);
        })

    }, []); 

    const getFakeProfiles = async () => {
        let profiles_temp = [];

        await Axios.get("https://randomuser.me/api/?results=5")
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
        !loading
        ?
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                profiles.map((profile, i) => (
                    <Suggestion key={i} userImg={profile.avatar} username={profile.username}/>
                ))
            }
        </div>
        :
        <SuggestionSkeletonLoader/>
    )
}

export default Suggetions
