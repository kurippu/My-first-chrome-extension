import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

import FrontPage from './Frontpage.tsx'
import Background from './Background.tsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('spotify_logged_in') === 'true'
  })

  useEffect(() => {
    if (isLoggedIn) return

    const callbackParams = new URLSearchParams(window.location.search)
    const code = callbackParams.get('code')
    const returnedState = callbackParams.get('state')
    const savedState = localStorage.getItem('spotify_oauth_state')

    if (code && returnedState && savedState === returnedState) {
      localStorage.setItem('spotify_logged_in', 'true')
      localStorage.removeItem('spotify_oauth_state')
      window.history.replaceState({}, document.title, window.location.pathname)
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  return isLoggedIn ? <Background /> : <FrontPage />
}



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App />
  </StrictMode>,
)
