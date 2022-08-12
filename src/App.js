import './App.css';
import {useState} from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {

  const [query, setQuery] = useState("");
  const [selects, setSelects] = useState();
  const [login,setLogin] = useState(true);
  const [loading,setLoading] = useState(true)


  if(login) {
    return <Login setLogin={setLogin}/>
  }

  return (
    <>
    <div className='container'>
      <Navbar selects={selects} setSelects={setSelects} query={query} setQuery={setQuery}/>
      
      
      <Card loading={loading} setLoading={setLoading} selects={selects} setSelects={setSelects} query={query} setQuery={setQuery}/>
    </div>
    
    </>
     
     
  );
}

export default App;
