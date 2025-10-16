import React from 'react'

export default function Card({name, type, country, image}) {
  return (
    <div style={{padding:'56px 0'}}>
      <div style={{border:'2px solid navy',
        padding:'15px',
        margin: '10px',
        borderRadius: '5px',
        width: '200px',
        boxShadow: '3px 3px 6px blue'}}>
    <div>
    <img 
        src={image} 
        alt={name} 
        style={{ 
            width: '100%', 
            height: '130px',
            objectFit: 'cover', 
            borderRadius: '5px' 
        }} 
    />
</div>
       <h3>{name}</h3>
      <p><b>Country:</b>{country}</p>
     <p><b>Type:</b><span style={{backgroundColor: 'beige',color:'black', padding: '2px 5px', borderRadius:'4px'}}>{type}</span></p>
    </div>
    </div>
  )
}
