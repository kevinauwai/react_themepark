import { restaurants } from "../../data";
import Restaurant from "./Components/Restaurant";

const Restaurants = () => {
  return (
    <div className="tony">
    <div className="restaurants" id="restaurants">
      <div className="section-title" id="section-title">Restaurant Informations</div>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Restaurants;