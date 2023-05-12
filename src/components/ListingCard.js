import {useState} from "react";

function ListingCard({listing}) {
  //console.log("listing props", listing)
  // the destructure and remove dot notaion below: 
  // const{description, id, image, location} = listing;

  console.log("listing,", listing)
  const[favorited, setFavorited] = useState(false)

  function handleFavorite() {
    //console.log("clicked", e)
    setFavorited(true)
  }

  function handleUnfavorite() {
    setFavorited(false)
  }

  function handleDelete() {
  //console.log("deleted")
    fetch(`http://localhost:6001/listings/listings/${listing.id}`, {
      method: "DELETE"
    });
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active"onClick={handleUnfavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
