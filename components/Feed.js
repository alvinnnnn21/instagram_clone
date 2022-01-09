import { useState, useEffect } from 'react';
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggetions from "./Suggetions"
import { MiniProfile as MiniProfileSkeletonLoader } from './Skeleton Loader/';

const Feed = () => {

    const[loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-2">
                <Stories/>
                <Posts/>
            </section>

            <section className="hidden xl:inline-grid col-span-1">
                <div className="fixed top-10">
                    <MiniProfile />
                    <Suggetions/>
                </div>
            </section>
        </main>
    )
}

export default Feed
