import React, { useState, useMemo } from 'react'
import List from './list'
export default function Destination() {
const initialDestinations = [ 
  {
    id: 1,
    name: " Goa",
    type: "Beach",
    country: " India",
    image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=1024x1024&w=is&k=20&c=Fo51rHxVKWpxq3kzEnGdfbEIm42dHcree8Hyzo2Zj9A="
  },
  {
    id: 2,
    name: " Manali",
    type: "Mountain",
    country: " India",
    image: "https://media.istockphoto.com/id/1804577674/photo/amazing-early-morning-view-of-a-small-colorful-village-below-the-mountain-and-cloudy-sky-at.jpg?s=1024x1024&w=is&k=20&c=aO7DYN-MJMo8Iw_RjOyIa0U52GEwbC7vemuFJ2Df6pM="
  },
  {
    id: 3,
    name: "Paris",
    type: "City",
    country: " France",
    image: "https://media.istockphoto.com/id/1127768734/photo/seine-in-paris.jpg?s=1024x1024&w=is&k=20&c=k0jF0fBzGK0nSfBtUwd47Lumv6B-bZ62AlUYtP3Lztc="
  },
  {
    id: 4,
    name: "Bali",
    type: "Beach",
    country: " Indonesia",
    image: "https://images.pexels.com/photos/2474687/pexels-photo-2474687.jpeg"
  },
  {
    id: 5,
    name: "Swiss Alps",
    type: "Mountain",
    country: " Switzerland",
    image: "https://images.pexels.com/photos/30929210/pexels-photo-30929210.jpeg"
  },
  {
    id: 6,
    name: "Tokyo",
    type: "City",
    country: " Japan",
    image: "https://media.istockphoto.com/id/912274822/photo/mt-fuji-and-tokyo-skyline.jpg?s=1024x1024&w=is&k=20&c=h1FIoVs2nU2v9sdJg6Y_Se7asJrb1odV-RoD36BYaIU="
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
