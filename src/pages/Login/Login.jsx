const Login = () => {
  return (
  <div className="login" id="login">
    <div className="section-title" id="section-title">membership login</div>
      <div className="login-card-content">
        <form className="contact-form login-card">
        <div className="login-card-img">
          <img className="login-card-image" src="public/img/Login/login.webp" alt=""/>
        </div>
        <div className="form-group">
          <p>Username</p>
          <input type="text" placeholder="Enter Username" name="uname" required/>
        </div>
        <div className="form-group">
          <p>Password</p>
          <input type="password" placeholder="Enter Password" name="psw" required/>
         </div>
        <label className="form-control">
          <input type="radio" name="radio" />
          Remember me
        </label>
        <br></br>
        <br></br>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
    </div>
    );
  };

export default Login;