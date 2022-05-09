import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./footer";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Content />
        <Footer />
      </main>
    )
  }
}

export default App;
