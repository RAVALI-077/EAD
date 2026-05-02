import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PasswordChecker from './PasswordStrengthen'
import StudentTable from './StudentTablePagenation'
import App from './multipageReactRouter'
import About from './About'
import Home from './Home'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordChecker />
      <StudentTable />
      <About />
      <About />
      <Home />
      <Contact/>
    </>
  )
}

export default App
