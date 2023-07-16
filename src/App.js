import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [mount, setMount] = useState('')
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    if (!mount) setMount(`mounted at ${new Date().toLocaleString()}`)

    return () => {console.log('component unmounted')}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(`updated at ${new Date().toLocaleString()}`)
  }, [update])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type='button' onClick={() => setUpdate(!update)}>update</button>
        {mount && (<p>{mount}</p>)}
      </header>
    </div>
  );
}

export default App;
