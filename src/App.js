import './App.scss';
import Home from './pages/Home/Home';
import cookie from 'react-cookies'
import { useEffect, useState } from 'react';
import { CookiesNotif } from './components';


function App() {
  const [showNotif, setShowNotif] = useState(true)
  useEffect(() => {
    
    const expires = new Date()
      expires.setDate(Date.now() + 5000)

      cookie.save('malik-cookie', 'data', {
        path: '/',
        expires,
        maxAge: 1000,
        secure: true,
        sameSite: false
      })

  }, [])

  const closeNotif = () => {
    setShowNotif(false)
  }

  return (
    <div className="App">
      {showNotif && <CookiesNotif close={closeNotif} />}
      <Home />
    </div>
  );
}

export default App;
