import React from 'react';
import { UIContextProvider } from './context/UIContext/UIContextProvider';

import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <UIContextProvider>
        <Home />
        <Footer />
      </UIContextProvider>
    </div>
  );
}

export default App;
