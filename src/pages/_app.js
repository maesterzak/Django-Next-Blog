// import '../styles/globals.css'

import '@/styles/globals.css'
import Layout from '../component/Layout'
import Navbar from '../component/Navbar'

function MyApp({ Component, pageProps }) {
  return (
  <>
  
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  
  )
}

export default MyApp
