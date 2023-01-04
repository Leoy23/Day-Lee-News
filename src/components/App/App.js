import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchData } from '../../utilities/apiCalls';
import "./App.css"
import Home from '../Home/Home';

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

  return (
    <main className='App'>
      <Switch>
        <Route exact path="/">
          <Home newsData={newsData}/>
        </Route>
      </Switch>
    </main>
  )
}

export default App;

