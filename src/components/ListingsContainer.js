import {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {

  const [listings, setListings] = useState([])

useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    // .then(data => setListings(data))
    .then(setListings);
  },[]);
  
 //console.log(listings)

 const filteredListings = listings.filter(
  (listing) => 
  listing.description.toLowerCase().includes(search.toLowerCase()))
  console.log("filteredLIstings", filteredListings)

 const renderListings = filteredListings.map((listing) => (
  //passing the individual object from the map of listings as props to listing card
   <ListingCard key={listing.id} listing={listing}/>
 ));

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
