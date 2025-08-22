const Subscribe= 
({title, image, price, advantage1, 
  advantage2, advantage3, advantage4, advantage5}) => {
  return (
    <div className="subscription-card">
      <div className="subscription-card-img">
        <img className="restaurant-image" src={image} alt=""/>
      </div>
    <br></br>
    <div className="subscription-card-container">
      <h1>{title}</h1>
        <h2 className="subscription-price">{price}</h2>
         <br></br>
        <li><i className="fa-solid fa-thumbs-up"></i>{advantage1}<br></br></li>
        <li><i className="fa-solid fa-thumbs-up"></i>{advantage2}<br></br></li>
        <li><i className="fa-solid fa-thumbs-up"></i>{advantage3}<br></br></li>
        <li><i className="fa-solid fa-thumbs-up"></i>{advantage4}<br></br></li>
        <li><i className="fa-solid fa-thumbs-up"></i>{advantage5}<br></br></li>
     </div>
     <br></br> 
    <a href="" className="button">Add to cert</a>
  </div>
  );
};

export default Subscribe;