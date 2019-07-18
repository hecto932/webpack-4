import React, { useState } from 'react'
import data from './data.json'

import Loader from './Loader'
import logo from '../images/platzi.png'
import video from '../videos/que-es-core.mp4'

console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }
 
  return (
    <div>
      <h1>React.js application</h1>
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img width="40px" src={logo} alt=""/>
      </p>
      <ul>
        {loaderList.map(item => (
          <Loader key={item.id} name={item.name} />
        ))}
      </ul>
      <button onClick={handleClick}>Mostrar aprendido</button>
    </div>
  )
}

export default App
