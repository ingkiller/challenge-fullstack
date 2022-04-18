
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import "./assets/css/style.css"
import {useEffect} from 'react'
import {  ClientContext } from 'graphql-hooks'
import { useGraphQLClient } from '../lib/graphql-client'
import {DefaultSeo} from 'next-seo';
import jsonConfig from './seoConfig'
import {UserContextProvider} from "../context/UserContext";
import {ProtectRoute} from './PrivateRoutes'


function MyApp({ Component, pageProps }) {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
  return (
      <ClientContext.Provider value={graphQLClient}>
          <DefaultSeo {...jsonConfig} />
          <UserContextProvider>
              <ProtectRoute>
                  <Component {...pageProps} />
              </ProtectRoute>

          </UserContextProvider>

      </ClientContext.Provider>
  )
}

export default MyApp
