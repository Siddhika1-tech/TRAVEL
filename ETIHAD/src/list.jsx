import React from 'react'
import Card from './card'
import Filterbar from './filterbar'
export default function List({destinations, currentFilter, setFilter}) {
   
  return (
    <div>
      <h2>ETIHAD TRAVEL PACKAGES</h2>
      <Filterbar setFilter={setFilter} currentFilter={currentFilter}/>
      <div style={{display:'flex', flesWrap: 'wrap', justifyContent: 'center' }}>
        {destinations.length > 0 ? (destinations.map((destination) => (
          <Card key ={destination.id} 
          name ={destination.name}
          type={destination.type}
          country={destination.country}
          image={destination.image}/>
        ))
      ):(
        <p>No destinatons found for the selected filter.</p>
      )}
      </div>
    </div>
  )
}
