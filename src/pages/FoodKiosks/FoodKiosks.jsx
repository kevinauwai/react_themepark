import { foodkiosks } from "../../data";
import FoodKiosk from "./Components/FoodKiosk";

const FoodKiosks = () => {
  return (
  <div className="tony">
    <div className="foodkiosks" id="foodkiosks">
      <div className="section-title" id="section-title">foodkiosks informations</div>
      <div className="foodkiosk-cards">
        {foodkiosks.map((foodkiosk) => (
          <FoodKiosk key={foodkiosk.id} {...foodkiosk} />
        ))}
      </div>
    </div>
  </div>
    );
  };

export default FoodKiosks;