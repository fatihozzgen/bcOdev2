import React from 'react'
import {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';


function Card({loading,query,setQuery,selects,setSelects,setLoading}) {

  const [data, setData] = useState([]);
  const removeBtn = document.querySelectorAll('.remove');

  // DATA FETCHİNG
  
    const getData = () => {
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(json => setData(json.results))
        .finally(setLoading(false))
      }
  // GET DATA
      useEffect(()=>{
        setTimeout(() => {
          getData()

        }, 1500);
      },[])
   
  // REMOVE USER
      function removeUser(e) {
        let target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode)
      }  for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", removeUser, false);
      }
      
      console.log(loading)

  // SELECT FİLTER
      if(selects !== undefined)
       {
        return (<>
    <div>
            {data.filter(item => item.gender.toLowerCase() === selects).map((item,i) => (
          
        <div className='cards' key={i}>
          <div className='card'> 
                      <div> {item.name} </div>
                      <div> {item.height}</div>
                      <div> {item.gender}</div>
                      <div className='lastch'> {item.films.map((film,i) => (  
                      <div  key= {i}>
                        <a className='listfilm'  href={film} target='_blank'>Favorite Film {i +1}</a>
                      </div> ))}
                      </div>
          </div>
            <button className='remove' onClick={removeUser}>X</button>
           
        </div>
        ))}
    </div>            
            </>)
          }

 
  return (  
    
    <div>
      
      {loading ?  <div className='loading'> <div className='line-wobble'> </div> </div> : 
       
       data.filter(item => item.name.toLowerCase().includes(query)).map((item,i) => (
        
        <div className='cards' key={i}>
        <div className='card'> 
                    <div> {item.name} </div>
                    <div> {item.height}</div>
                    <div> {item.gender}</div>
                    <div className='lastch'> {item.films.map((film,i) => (  
                    <div  key= {i}>
                      <a className='listfilm'  href={film} target='_blank'>Favorite Film {i +1}</a>
                    </div> ))}
                    </div>
        </div>
          <button className='remove' onClick={removeUser}>X</button>
         
      </div>
      ))

      }

       

      </div>
  )
  
}

export default Card