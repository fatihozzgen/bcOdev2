import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navcont'>
      <input placeholder='Search'></input>
        <select name="" id="" className='select'>
            <option value=""> Male</option>
            <option value=""> Female</option>
            <option value=""> N/A</option>
        </select>
      </div>
        

        <div className='info'> 
        <div className='name'>Name</div>
        <div className='height'>Height</div>
        <div className='gender'>Gender</div>
        <div className='fav'>Favorite Films</div>
        
         </div>
   </div>
   
  )
}

export default Navbar