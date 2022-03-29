import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client'

const client = new ApolloClient({
  uri : 'http://localhost:1337/graphsql',
  cache : new InMemoryCache()
})

client.query({
  query: gql`
    query GetEquipamentos {
      equipamentos{
        nome
      }
    }
  `
})
.then(result => console.log(result));
ReactDOM.render(
  <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ApolloProvider>
  ,
  document.getElementById('root')
);