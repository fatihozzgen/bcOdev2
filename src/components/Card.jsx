import React from 'react'
import {useState,useEffect} from 'react'

function Card({query,setQuery}) {

 

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(json => setData(json.results))
       
      }
  
      useEffect(()=>{
        getData()
      },[])

      function removeUser(e) {
        let target = e.target;
        console.log(target.parentNode.parentNode.removeChild(target.parentNode)) 
      }
      
      var removeBtn = document.querySelectorAll('.remove');
      
      for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", removeUser, false);
      }
      
      


  return (  
    <div>
 

        
        {data.filter(item => item.name.toLowerCase().includes(query)).map((item,i) => (
        
        <div className='cards' key={i}>
<div className='card'> 


<div> {item.name} </div>
        <div> {item.height}</div>
        <div> {item.gender}</div>
        <div className='lastch'> {item.films.map((film,i) => (
            
            <div  key= {i}>
               <a className='listfilm'  href={film} target='_blank'>Favorite Film {i +1}</a>
               </div>
      
           
        ))}</div>
        
</div>
<button className='remove' onClick={removeUser}>X</button>
  <div className='button'>
  
  </div>
       
        
          </div>
      ))}


      </div>
  )
  
}

export default Card