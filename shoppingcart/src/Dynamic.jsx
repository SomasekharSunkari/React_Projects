import { useParams } from "react-router-dom";
export const DyamicRoutes = (props) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="route mh-100 w-100 bg-danger text-center fs-3 fw-bolder shadow-lg">
      <p>
        {props.id} and {id}Numbers Route is this one
      </p>
    </div>
  );
};
