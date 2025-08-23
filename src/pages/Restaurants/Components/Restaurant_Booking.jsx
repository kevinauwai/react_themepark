const Restaurant_Booking = () => {
   return (
  <div className="tony">
   <div className="restaurant-booking">
    <div className="section-title" id="section-title">Restaurant Booking</div>
      <div className="restaurant-contact-content">
          <form className="contact-form restaurant-contact-card">
             <p>Please complete the following table in below.</p>
            <div className="form-group">
              <p>Name</p>
              <input type="text" id="name1" name="name1" placeholder="Your Name" required/>
            </div>
            <div className="form-group">
              <p>Mobile Number</p>
              <input type="text" id="mobile1" name="mobile1" placeholder="Your mobile number" required/>
            </div>
            <div className="form-group">
              <p>Selected Restaurant</p>
              <select id="restaurantname" name="restaurantname">
                <option value="Lyonrice">Pixelfood</option>
                <option value="Griddiner">Griddiner</option>
                <option value="Synthfood">Synthfood</option>
                <option value="Lyonrice">Lyonrice</option>
              </select>
            </div>
            <div className="form-group">
              <p>Date</p>
              <input type="date" id="date" name="date" required/>
            </div>
            <div className="form-group">
              <p>Time</p>
              <input type="time" id="time" name="time" required/>
            </div>
            <div className="form-group">
              <p>No. of guest</p>
              <input type="number" id="nog" name="nog" required/>
            </div>
            <div className="form-group">
              <p>Special request</p>
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="button">SEND MESSAGE</button>
        </form>
    </div>
   </div>
   </div>
   );
};

export default Restaurant_Booking;