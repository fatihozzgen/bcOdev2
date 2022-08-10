import React from 'react'
import { useState } from 'react'

const Login = ({setLogin}) => {
    const [username,setUsername] = useState()
    const [passowrd,setPassowrd] = useState()
    const [error,setError] = useState(false)

const loginChange =() => {

    if( username === "admin" && passowrd === "admin") {
        setLogin(false)
    } else {
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000);
    }
}
    

  return (
    <div>
        <input type="text" placeholder='usernama' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='passowrd' onChange={(e) => setPassowrd(e.target.value)} />
        {error && <span>hatalı giriş</span>}
        <button onClick={loginChange }> giriş </button>
    </div>
  )
}

export default Login