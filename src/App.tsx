import React from 'react';
import 'normalize.css';
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
        <section>
          <ListGifs />
        </section>
      </Layout>
    </>
  );
}

export default App;
