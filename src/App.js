import React, { useState, useEffect} from 'react';
import { fetchData } from './apiCalls';
import "./App.css"

const App = () => {
  const [newsData, setNewsData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copyright, setCopyright] = useState(null)

  const getNewsData = () => {
    setLoading(true)
    fetchData('world')
    .then((data) => {
      setNewsData(data.results)
      setCopyright(data.copyright)
      setLoading(false)
    })
  }

  useEffect(() => {
   getNewsData()
  }, [])

  console.log(newsData)

  return (
    <div>
    </div>
  )
}

export default App;

