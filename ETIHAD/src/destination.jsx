import React, { useState, useMemo } from 'react'
import List from './list'
export default function Destination() {
const initialDestinations = [ 
  {
    id: 1,
    name: " Goa",
    type: "Beach",
    country: " India",
    image: "../src/assets/goa.jpeg"
  },
  {
    id: 2,
    name: " Manali",
    type: "Mountain",
    country: " India",
    image: "../src/assets/manali.jpeg"
  },
  {
    id: 3,
    name: "Paris",
    type: "City",
    country: " France",
    image: "../src/assets/france.jpg"
  },
  {
    id: 4,
    name: "Bali",
    type: "Beach",
    country: " Indonesia",
    image: "../src/assets/bali.jpeg"
  },
  {
    id: 5,
    name: "Swiss Alps",
    type: "Mountain",
    country: " Switzerland",
    image: "../src/assets/swissalps.jpeg"
  },
  {
    id: 6,
    name: "Tokyo",
    type: "City",
    country: " Japan",
    image: "../src/assets/tokyo.jpeg"
  }
];
const[filterType, setFilterType] = useState('All');
const [activePage, setActivePage] = useState('Destinations');
const filteredDestinations = useMemo(() => {
  if(filterType === 'All'){
    return initialDestinations;
  }
    return initialDestinations.filter(
      (dest) => dest.type === filterType);
    },[filterType]);
  return (
    <div className='desti-cont'>
      {activePage === 'Destinations' && (
              <List destinations={filteredDestinations} currentFilter={filterType} setFilter={setFilterType}/>
            )}
    </div>
  )
}
