import Footer from '@/layout/footer'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import 'swiper/swiper-bundle.min.css';

import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
    
}
