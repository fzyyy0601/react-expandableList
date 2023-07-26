import { useState } from 'react'
import './App.css'
import ExpandableList from './components/ExpandableList'

function App() {

  const [showListOne, setShowListOne] = useState(true)
  const handleClick = (value)=>{
    if(value === "1") setShowListOne(true);
    else setShowListOne(false);
  }
  return <div className='App'>
    <h3 className='App-header'>Here is test code for the project</h3>
    <button className="btn" onClick={()=>handleClick("1")}>button 1</button>
    <button className="btn" onClick={()=>handleClick("2")}>button 2</button>
    {/* <ExpandableList show={showListOne}/> */}
    <ExpandableList showListOne={showListOne}/>
  </div>
}

export default App
