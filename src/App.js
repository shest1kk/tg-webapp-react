import { useEffect } from 'react';
import Header from "./components/Header/Header"
import { useTelegram } from './hooks/useTelegram';
import './App.css';

function App() {

  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
