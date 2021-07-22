import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'

import { Header } from '../Components/Header/index'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
