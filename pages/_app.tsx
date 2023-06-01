import Layout from "../components/Layout";
import apolloClient from "../lib/apollo";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
