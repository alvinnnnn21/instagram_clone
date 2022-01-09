import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react';

function SignIn({ providers }) {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");  

    // const onLogin = () => {
    //   signIn("credentials", {
    //     username, 
    //     password,
    //     callBackUrl: "/"
    //   })
    // }

    return (
        <>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
          {/* <div className="bg-gray-50 flex flex-col justify-center items-center h-screen pb-20">
            <div className="flex flex-col items-center bg-white px-8 py-8 border border-gray-300">
              <div className="relative w-48 h-20 inline-grid">
                <Image
                    src="https://links.papareact.com/ocw"
                    layout="fill"
                    objectFit="contain"
                />
              </div>

              <div className="mt-5 flex flex-col items-center">
                <input 
                  value={username}
                  onChange={(e) => {setUsername(e.target.value)}}
                  type="text" 
                  className="w-[290px] bg-gray-50 border-gray-300 border rounded-sm text-xs focus:ring-gray-300 focus:border-gray-300" 
                  placeholder="Phone number, username, or email" 
                />
                <input 
                  value={password}
                  onChange={(e) => {setPassword(e.target.value)}}
                  type="password" 
                  className="w-[290px] mt-2 bg-gray-50 border-gray-300 border rounded-sm text-xs focus:ring-gray-300 focus:border-gray-300" 
                  placeholder="Password" 
                />
                <button 
                  onClick={() => {onLogin()}}      
                  className="w-[300px] bg-blue-500 py-1 mt-6 text-white font-semibold rounded-md">
                  Log In</button>
              </div>

              <div className="flex flex-row items-center justify-between mt-5 space-x-4">
                <div className="h-[0.5px] bg-slate-300 w-32"/>
                <div className="text-sm font-semibold text-gray-500">OR</div>
                <div className="h-[0.5px] bg-slate-300 w-32"/>
              </div>

              <div 
                onClick={() => {signIn(providers.google.id, { callbackUrl: "/" })}}
                className="flex flex-row mt-8 cursor-pointer items-center space-x-2">
                <SocialIcon style={{width: 32, height: 32}} network="google"/>
                <span className="text-sm text-blue-900 font-semibold">Log in with {providers.google.name}</span>
              </div>  

              <div className="mt-4">
                <a className="text-xs text-blue-900" href="">Forgot Password?</a>
              </div>

            </div>

            <div className="flex flex-col items-center bg-white px-10 py-5 mt-3 border border-gray-300">
              <div className="px-9">
                <span>Don't have an account? <a className="text-blue-500 font-semibold text-sm" href="">Sign Up</a></span>
              </div>
            </div>
            
            <div className="text-center flex">
              <span className="text-sm text-black-900 mt-5">Get the app.</span>
            </div>

            <div className="flex flex-row space-x-3 mt-5">
              <div>
                  <img 
                    className="w-36 h-12 cursor-pointer"
                    layout="fill"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  />
              </div>
              <div>
                  <img 
                    className="w-36 h-12 cursor-pointer"
                    layout="fill"
                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  />
              </div>
            </div>
          </div> */}
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    console.log("providers signin", providers);
    return {
      props: { providers },
    }
}

export default SignIn
