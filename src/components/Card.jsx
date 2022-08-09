import React from 'react'
import {useState,useEffect} from 'react'

function Card({query,setQuery}) {

 

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(json => setData(json.results))
        // setIsLoading(false);
        // setFilteredData(res.data);
      }
     
      // console.log(data.filter(item => item.name.toLowerCase().includes(query)))


      useEffect(()=>{
        getData()
      },[])


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

  <div className='button'>
  <button className='buttonx'>X</button>
  </div>
       
        
          </div>
      ))}


      </div>
  )
  
}

export default Card