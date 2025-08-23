import { specialfoods } from "../../data";
import SpecialFood from "./Components/SpecialFood";

const SpecialFoods = () => {
  return (
    <div className="tony">
    <div className="specialfoods" id="specialfoods">
      <div className="section-title" id="section-title">special food arrangements</div>
      <div className="specialfoods-cards">
        {specialfoods.map((specialfood) => (
          <SpecialFood key={specialfood.id} {...specialfood} />
        ))}
      </div>
    </div>
    </div>
    );
  };

export default SpecialFoods;