import Layout from "../components/Layout";
import apolloClient from "../lib/apollo";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import { UserProvder } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvder>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvder>
  );
}

export default MyApp;
