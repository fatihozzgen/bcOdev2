import './App.css';
import {useState} from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';



function App() {

  const [query, setQuery] = useState("");


  return (
    <>
    <div className='container'>
      <Navbar query={query} setQuery={setQuery}/>
     <Card query={query} setQuery={setQuery}/>
    </div>
    
    </>
     
     
  );
}

export default App;
