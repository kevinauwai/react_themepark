const Restaurant = 
({name, maininfo, image, location, 
  itemimage1, iteminfo1, itemprice1, 
  itemimage2, iteminfo2, itemprice2, 
  itemimage3, iteminfo3, itemprice3}) => {
  return (
    <div className="restaurant-card">
      <h2><b>{name}</b></h2>
      <p>{maininfo}</p>
        <div className="restaurant-card-img">
            <img className="restaurant-image" src={image} alt=""/>
          <p><i className="fa-solid fa-location-dot"></i>{location}</p>
        </div>  
          <div className="restaurant-card-container">
          <h3>Recomendations</h3>
            <div className="restaurant-row">
              <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage1} alt=""/>
                <li>{iteminfo1}</li>
                <li>{itemprice1}</li>
              </div>
              <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage2} alt=""/>
                <li>{iteminfo2}</li>
                <li>{itemprice2}</li>
              </div>
            <div className="restaurant-column">
                <img className="restaurant-itemimage" src={itemimage3} alt=""/>
                <li>{iteminfo3}</li>
                <li>{itemprice3}</li>
              </div>
            </div>
          </div>
            <a href="" className="button">Booking Now</a>
          </div>
  );
};

export default Restaurant;