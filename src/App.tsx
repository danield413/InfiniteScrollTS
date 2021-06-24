import React from 'react';
import 'normalize.css';
import 'animate.css';
import './App.css';
import Form from './components/Form';
import Layout from './components/Layout';
import ListGifs from './components/ListGifs';

function App(): JSX.Element {
  return (
    <>
      <header>
        <Form />
      </header>
      <Layout>
        <main>
          <ListGifs />
        </main>
      </Layout>
    </>
  );
}

export default App;
