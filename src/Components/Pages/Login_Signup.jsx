import "./Styles/Login_SignUp.css";
export const LoginOrSignup = () => {
  return (
    <div className="login-sign-main">
      <div className="LoginSignup">
        <h1>Sign Up</h1>
        <div className="input-values">
          <input type="text" placeholder="Your Name" required /> <br />
          <input type="email" placeholder="Email Address" /> <br />
          <input type="password" placeholder="Password" /> <br />
          <button className="login-signup">Continue</button>
          <div className="already-have">
            <span>
              Already have an account ? <a href="#">Login here</a>
            </span>
          </div>
        </div>
        <div className="privacy-policy">
          <input type="checkbox" />
          <p>By Continueing i agree to the terms use & privacy policy </p>
        </div>
      </div>
    </div>
  );
};
