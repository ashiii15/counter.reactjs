import React from 'react'
const Greet = (props)=>{
  return (
   <div>
        <h1>hello {props.name} a.k.a {props.superheroName}</h1> 
        {props.children}
   </div>

  ) 
}
export default Greet