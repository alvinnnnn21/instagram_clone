import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...props } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...props} />
      </RecoilRoot>
    </SessionProvider>
  )
  
}

export default MyApp
