import { subscription } from "../../data";
import Subscribe from "./Components/Subscribe";

const Subscription = () => {
  return (
    <div className="subscription" id="subscription">
      <div className="section-title" id="section-title">subscription plan</div>
      <div className="subscription-cards">
        {subscription.map((subscribe) => (
          <Subscribe key={subscribe.id} {...subscribe} />
        ))}
      </div>
    </div>
    );
  };

export default Subscription;