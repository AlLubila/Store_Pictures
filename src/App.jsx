
import Pop from './components/Pop'
import Home from './components/Home'
import './index.css'
import { useState } from 'react'

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false)

  return (
    <>
    <Home setIsPopupVisible = {setIsPopupVisible}/>
    {
      isPopupVisible && <Pop setIsPopupVisible = {setIsPopupVisible}/>
    }
    </>
  )
}

export default App
