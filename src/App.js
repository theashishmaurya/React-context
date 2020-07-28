import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/Theme';
import ThemeToggle from './components/ThemeToggle';
import Auth from './context/Auth';

function App() {
  return (
    <div className="App">
    <Auth>
    <ThemeContextProvider>
      <Navbar/>
      <Booklist/>
      <ThemeToggle/>
      </ThemeContextProvider>
      </Auth>
    </div>
  );
}
 
export default App;
