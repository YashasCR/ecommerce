import Login from './components/Login'
import Register from './components/Register'
import './App.css';
import React from 'react'

function App() {
  return (
    <React.Fragment>
    {/* <section className='centered'>
      <Login />
    </section> */}
    <section className='centered'>
      <Register />
    </section>
  </React.Fragment>
  );
}

export default App;
