import React, { useEffect, useState } from 'react'
import Clock from './Clock'

const App = () => {
  const [visibility, setVisibility] = useState(true)

  const handleVisibility = () => setVisibility(!visibility)

  return (
    <>
      {visibility && (
        <div className="container">
          <Clock location="Warsaw" offset={+2} />
          <Clock location="London" offset={0} />
          <Clock location="New-York" offset={-5} />
        </div>
      )}
      <div>
        <button className="hide_btn" onClick={handleVisibility}>
          {visibility ? 'hide' : 'show'}
        </button>
      </div>
    </>
  )
}

export default App
