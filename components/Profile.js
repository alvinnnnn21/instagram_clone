import { useSession } from 'next-auth/react';
import {
    CogIcon
} from '@heroicons/react/outline';

const Profile = () => {

    const { data:session } = useSession();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            <section className="col-span-3 pt-8">
                <div className="flex flex-row justify-center space-x-10">
                    <img 
                        className="w-32 h-32 rounded-full"
                        alt=""
                        src={session?.user?.image}
                    />
                    <div className="flex flex-col justify-centers pt-4 space-y-6">
                        <div className="flex flex-row space-x-4 items-center">
                            <h2 className="text-xl">{session?.user?.username}</h2>
                            <button className="outline-none border px-3 py-1 rounded-md border-gray-300">Edit Profile</button>
                            <CogIcon className="h-6 w-6"/>
                            <h1 className="text-xl">{session?.user?.name}</h1>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <h3>0 posts</h3>
                            <h3>425 followers</h3>
                            <h3>440 following</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
