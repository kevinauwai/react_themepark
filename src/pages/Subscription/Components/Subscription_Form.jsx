const Subscription_Form = () => {
   return (
  <div className="tony">
   <div className="subscription-form">
      <div className="section-title" id="section-title">Subscription</div>
        <div className="subscribe-contact-content">
          <form className="contact-form subscribe-contact-card">
          <p>Please complete the following table in below.</p>
        <div className="form-group">
          <p>Membership Type</p>
          <select id="membershipname" name="membershipname">
            <option value="Copper">Copper</option>
            <option value="Sliver">Sliver</option>
            <option value="Gold">Gold</option>
          </select>
        </div>
        <div className="form-group">
          <p>Name</p>
          <input type="text" id="name2" name="name2" placeholder="Your name" required/>
        </div>
        <div className="form-group">
          <p>Mobile Number</p>
          <input type="text" id="mobile" name="mobile" placeholder="Your mobile number" required/>
        </div>
        <div className="form-group">
          <p>Address</p>
          <input type="text" id="address" name="address" placeholder="Your Address" required/>
        </div>
        <div className="form-group">
          <p>Birthday</p>
          <input type="date" id="birthday" name="birthday" required/>
        </div>
        <div className="form-group">
          <p>Accept Cards</p>
          <div className="subscribe-contact-icon-container">
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-discover"></i>
          </div>
        </div>
        <div className="form-group">
           <p>Name on Card</p>
          <input type="text" id="cname" name="cardname" placeholder="Chan Tai Man"/>
        </div>
        <div className="form-group">
          <p>Credit card no.</p>
          <input type="number" id="ccnum" name="cardnumber" placeholder="1111222233334444"/>
        </div>
        <div className="form-group">
          <p>Exp Month</p>
          <input type="number" id="expmonth" name="expmonth" placeholder="9"/>
        </div>
        <div className="form-group">
          <p>Exp Year</p>
          <input type="number" id="expyear" name="expyear" placeholder="2018"/>
        </div>
        <div className="form-group">
          <p>CVV</p>
          <input type="number" id="cvv" name="cvv" placeholder="352"/>
        </div>
          <button type="submit" className="button">SEND MESSAGE</button>
      </form>
      </div>
    </div>
    </div>
   );
};

export default Subscription_Form;