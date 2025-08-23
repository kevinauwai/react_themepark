import { Link } from "react-router-dom";

const SpecialFood = 
({specialfoodsimg, title, description}) => {
  return (
  <div className="specialfood-flex-container specialfood-flex-column">
    <div className="specialfood-img-card specialfood-img-card--row specialfood-flex-container">
      <div className="specialfood-img-card--inner specialfood-flex-container">
        <div className="specialfood-txt-wrapper">
          <h3>{title}</h3>
          <hr />
          <p>{description}</p>
          <br></br>
          <Link to="/specialFoods_Request" className="button">Send for request</Link>
          {/* <button type="submit" className="button">Send for request</button> */}
        </div>
        <div className="specialfood-img-wrapper">
          <img className="specialfood-profile-img" src={specialfoodsimg} alt="img alt"></img>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SpecialFood;