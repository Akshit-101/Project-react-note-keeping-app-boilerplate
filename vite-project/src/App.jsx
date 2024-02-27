
import './App.css'
import React from 'react'
import NoteBook from './NoteBook.jsx'

class App extends React.Component{
  render(){
    return (
      <>
        <div>
          <NoteBook initialValue="Hello, World!" /> {/* Pass initialValue prop */}
        </div>
      </>
    )
  }
}

export default App
