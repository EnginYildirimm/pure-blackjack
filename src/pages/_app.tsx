import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='flex-1'>
    <div className='flex flex-col'>
    <Header/>
    <div className='w-full h-screen'>

    <Component {...pageProps} />
    </div>
    <Footer/>
    </div>
  </div>
  );
}
