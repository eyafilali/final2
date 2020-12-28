import React from 'react'

const card = (peopleList) => {
    const cards= peopleList.map(({first_name,last_name,age}, key)=>
    ( <div className="people" key="key">
      <p>nom :{first_name}</p>
      <p> prenom :{last_name}</p>
      <p>age: {age}</p>
    </div>))
    return (
        <div>
    <div className="container marginBlock "  style ={{color:"greenyellow"}} > {cards}</div>
        </div>
    )
}

export default card
