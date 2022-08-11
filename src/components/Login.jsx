import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({setLogin}) => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const [error,setError] = useState(false)

const loginChange =(e) => {
    if( username === "admin" && password === "admin") {
        setLogin(false)
    } else {
        e.preventDefault()
        setError(true)
        notify()
    }
    
}

   const notify = () => toast.warn('Hatalı Giriş', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

    });;


  return (
    <div className='logCont'>
        <form className='logborder'>  

        <div className='inputs'> 
            <input className='log' type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <input className='log' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type='submit' className='logBtn' onClick={loginChange}>
             <span> Button </span>
        </button>

        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            
        </form>
        
    </div>
  )
}

export default Login