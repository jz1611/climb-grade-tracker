import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return <div>
      <Header />
      <Main />
      <Footer />
    </div>
  }
}

export default App;
