import { Link } from "react-router-dom";

const Subscribe= 
({title, image, price, advantage1, 
  advantage2, advantage3, advantage4, advantage5}) => {
  return (
    <div className="subscribe-flex-container subscribe-flex-column">
      <div className="subscribe-img-card subscribe-img-card--row-reverse subscribe-flex-container">
        <div className="subscribe-img-card--inner subscribe-flex-container">
          <div className="subscribe-txt-wrapper">
            <h1>{title}</h1>
            <h2>{price}</h2>
            <br></br>
            <li><i className="fa-solid fa-thumbs-up"></i>{advantage1}</li>
            <li><i className="fa-solid fa-thumbs-up"></i>{advantage2}</li>
            <li><i className="fa-solid fa-thumbs-up"></i>{advantage3}</li>
            <li><i className="fa-solid fa-thumbs-up"></i>{advantage4}</li>
            <li><i className="fa-solid fa-thumbs-up"></i>{advantage5}</li>
            <br></br>
            <Link to="/subscription_Form" className="button">Subscribe</Link>
            {/* <button type="submit" className="button">Subscribe</button> */}
          </div>
        <div className="subscribe-img-wrapper">
          <img className="subscribe-profile-img" src={image} alt="img alt"></img>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Subscribe;