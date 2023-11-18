import ice01 from "../Assets/ice01.jpg";
export const Item = (props) => {
  return (
    <div className="card w-100 m-2">
      <img src={ice01} alt="Image" className="card-img-top h-50" />
      <div className="card-body">
        <h5 className="card-title">Ice Creame</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          officia.
        </p>
        <a href="#" className="btn btn-primary d-block mx-auto">
          Buy Now
        </a>
      </div>
    </div>
  );
};
