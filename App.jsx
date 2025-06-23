import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="theme-controller">
      <button 
        onClick={() => setDarkMode(prev => !prev)} 
        className="theme-toggle-button"
      >
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
