
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import "./assets/vendor/aos/aos.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/glightbox/css/glightbox.min.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/css/style.css"
import {useEffect} from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import { useGraphQLClient } from '../lib/graphql-client'
import {DefaultSeo} from 'next-seo';
import DEFAULT_SEO from './seoConfig'
import {UserContextProvider} from "../context/UserContext";


function MyApp({ Component, pageProps }) {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
  return (
      <ClientContext.Provider value={graphQLClient}>
          <DefaultSeo {...DEFAULT_SEO} />
          <UserContextProvider>
              <Component {...pageProps} />
          </UserContextProvider>

      </ClientContext.Provider>
  )
}

export default MyApp
