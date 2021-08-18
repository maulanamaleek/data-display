import './App.scss';
import Home from './pages/Home/Home';
import cookie from 'react-cookies'
import { useEffect, useState } from 'react';
import { CookiesNotif, OfflineStatus } from './components';


function App() {
  const [showNotif, setShowNotif] = useState(true)
  const [offline, setOffline] = useState(false)
  useEffect(() => {
    window.addEventListener('offline', () => setOffline(true));
    const expires = new Date()
      expires.setDate(Date.now() + 60000)

      cookie.save('malik-cookie', 'data', {
        path: '/',
        expires,
        maxAge: 1000,
        secure: true,
        sameSite: false
      }, )

      setInterval(() => {
        console.log('halooo')
        setShowNotif(true)
      }, 60000)

  }, [])

  const closeNotif = () => {
    setShowNotif(false)
  }

  return (
    <div className="App">
      {offline && <OfflineStatus close={() => setOffline(false)} />}
      {showNotif && <CookiesNotif close={closeNotif} />}
      <Home />
    </div>
  );
}

export default App;
