

import { useState } from 'react'
import './App.css'
import QuotesBox from './components/QuotesBox'
import quotes from './json/quotes.json'
import color from './json/color.json'

function App() {

  const randonarr = arr => {
    const ind = Math.floor(Math.random() * arr.length)
    return arr[ind]
  }
  const [quote, setQuote] = useState(randonarr(quotes))
  const [colorrandom, setColorrandom] = useState(randonarr(color))


  const handeClick = () => {
    setQuote(randonarr(quotes))
    setColorrandom(randonarr(color))
  }

  return (
    <div className="App" style={{ background: colorrandom }} >
      <QuotesBox quote={quote} handeClick={handeClick} colorrandom={colorrandom} />
    </div >
  )
}

export default App
