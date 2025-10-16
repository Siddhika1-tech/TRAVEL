import React from 'react'

export default function Book() {
  return(
    <div className='book-cont'>
      <form>
      <h2>Claim Your Adventure!</h2>
     <label> <input type="text" placeholder="Name*" required /></label><br/>
     <label ><input type="text" placeholder="City Of Residence*" required /></label><br/>
     <label><input type="number" placeholder="Phone Number*" required /></label><br/>
     <label><input type="text" placeholder="Email*" required /></label><br/>
     <label><input type="text" placeholder="Travel Destination*" required /></label><br/>
     <label><input type="date" placeholder="Date Of Travel*" required /></label><br/>
     <label><input type="number" placeholder="No Of People*" min="1" required /></label><br/>
    <button type="submit">SUBMIT</button>
    </form>
      </div>
  )
}
