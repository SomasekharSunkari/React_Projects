import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="letter-content">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>

        <div className="customer-email">
          <input type="email" name="email" placeholder="Your Email id" />
          <button className="subscribebtn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
