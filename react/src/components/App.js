import React, { useState } from 'react'
import data from './data.json'

import Loader from './Loader'

console.log(data)

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      React.js application
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
