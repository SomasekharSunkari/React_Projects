import hand from "../Assets/Ecommerce_Frontend_Assets/Assets/hand_icon.png";
import "./Styles/home.css";
import heroimg from "../Assets/Ecommerce_Frontend_Assets/Assets/hero_image.png";
export const Home_page = () => {
  return (
    <div className="homemain">
      <div className="content">
        <div>
          <p>New Arrivals Only</p>
          <div>
            <h1 className="hand">
              new <img src={hand} alt="Hand-icon" />
            </h1>
            <h1>collections</h1>
            <h1>for everyone</h1>
          </div>

          <button>Lateset Collection</button>
        </div>
      </div>

      <div className="heroimg">
        <img src={heroimg} alt="hero-images" />
      </div>
    </div>
  );
};
