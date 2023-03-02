import phrase from './assets/data.json'
import './App.css'
import Card from './components/card/Card'
import { useState } from 'react'
import image from './assets/uno.jpg'

function App() {
  const ramdonIndex = Math.floor(Math.random() * phrase.length)
  const [visible,setVisible] = useState(ramdonIndex)
  const changeCard = () => {
    const newIndex= Math.floor(Math.random()* phrase.length)
    setVisible(newIndex)
  }

  return (
    <div className="App">

     <Card 
     phrase = {phrase[visible]}
     changePhrase = {changeCard}
     im = { image}
     />
    </div>
  )
}

export default App
