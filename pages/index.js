import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Modal from './../components/Modal';

export default function Home() {

  const router = useRouter();
  
  const {data: session, status} = useSession({
    // required: true,
    // onUnauthenticated(){
    //   router.replace("auth/signin");
    // }
  });

  console.log("next auth", process.env.NEXTAUTH_URL)
  
  return (
    status !== "loading"
    ?
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>INSTARGRAM CLONE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>

      {/* <Feed/>   */}

      <Modal/>
    </div>
    :
    <div className="bg-gray-50 h-screen flex justify-center items-center animate-pulse">
        <FontAwesomeIcon className="w-16 h-16 text-gray-300" icon={faInstagram}/>
    </div>
  )
}
