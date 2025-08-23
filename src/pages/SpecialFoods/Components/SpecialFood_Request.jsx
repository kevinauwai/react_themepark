const SpecialFood_Request = () => {
   return (
    <div className="tony">
    <div className="special-food-request">
      <div className="section-title" id="section-title">Special request Form</div>
        <div className="specialfoods-contact-content">
			    <form className="contact-form specialfoods-contact-card">
            <p>Please complete the following table in below.</p>
            <div className="form-group">
              <p>Name</p>
              <input type="text" id="name" name="name" placeholder="Your name" required/>
            </div>
            <div className="form-group">
              <p>Mobile Number</p>
              <input type="text" id="contact" name="contact" placeholder="Your phone number" required/>
            </div>
            <div className="form-group">
              <p>Meal</p>
              <select id="meal" name="meal">
                <option value="kidsmeal">Kids meal</option>
                <option value="plantbased ">Plant-based menu items</option>
                <option value="halal">Halal Cuisine</option>
                <option value="dietary">Dietary requirements</option>
              </select>
            </div>
            <div className="form-group">
              <p>Requirements</p>
              <textarea rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="button">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
   );
};

export default SpecialFood_Request;