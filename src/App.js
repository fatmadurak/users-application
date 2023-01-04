
import { useState } from 'react';
import './App.css';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

function App() {
const[activeId,setActiveId]=useState(null);

  return (
    <div className="App">
      
    <div className="left">
      <Users setActiveId={setActiveId}/>
    </div>
    <div className="right">
      <UserDetails activeId={activeId}/>
    </div>
    </div>
  );
}

export default App;
