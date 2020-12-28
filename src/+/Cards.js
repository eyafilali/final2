import React from 'react'

const Cards = (peopleList) => {
    
    return (
        <div>
    <div className="container marginBlock "  style ={{color:"greenyellow"}} >{peopleList.map(({first_name,last_name,age}, key)=>
    ( <div className="people" key="key">
      <p>nom :{first_name}</p>
      <p> prenom :{last_name}</p>
      <p>age: {age}</p>
    </div>))} </div>
       </div>
    )
}

export default Cards
