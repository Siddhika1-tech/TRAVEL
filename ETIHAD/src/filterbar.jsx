import React from 'react'

export default function Filterbar({setFilter, currentFilter}) {
    const types = ["All", "Beach", "Mountain", "City"];
  return (
<div style={{marginBottom:'20px'}}>
    {types.map((type) =>(
    <button key={type} onClick ={() => setFilter(type)} style={{marginRight: '20px', padding: '8px 15px', border: '2px solid gold', 
        backgroundColor: currentFilter == type? 'beige' : 'white',color: currentFilter === type? 'black' : ' grey', 
        borderRadius: '4px', cursor:'pointer', transition: 'background-color 0.3s'
    }}>{type}</button>
    ))}
 </div>
  )
}
