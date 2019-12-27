import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from "./Context/ThemeContext";
import CountdownComponent from './components/CountdownComponent/CountdownComponent';
function App() {
  const { themeMode, toggleTheme } = useContext(ThemeContext);

  const headerClass = `App-header ${themeMode}`;
  const toggleThemeMode = () => {
    toggleTheme(  (themeMode === 'dark') ? 'light' : 'dark'  );
  }
  return (
    <div className="App">
      <header className={headerClass}>
        <CountdownComponent />
        <button className={`theme-toggle-btn icon-${themeMode}`} onClick={toggleThemeMode}>
          Toggle {themeMode === "dark" ? "Light" : "Dark"} Mode
        </button>
      </header>
    </div>
  );
}

export default App;
