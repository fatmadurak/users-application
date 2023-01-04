
import './App.css';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      
    <div className="left">
      <Users/>
    </div>
    <div className="right">
      <UserDetails/>
    </div>
    </div>
  );
}

export default App;
