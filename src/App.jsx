import React, { useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
    </div>
  );
}

export default App;