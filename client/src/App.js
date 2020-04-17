import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
