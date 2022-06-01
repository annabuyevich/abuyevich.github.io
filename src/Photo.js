import photo from "./assets/website_photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

const Photo = () => {
  return (
    <div className="panel photos">
      <img src={photo} alt="me" />
      <div className="text">
        <h2>
          These photos were captured in Colorado{" "}
          <FontAwesomeIcon icon={faMountainSun} />
        </h2>
      </div>
    </div>
  );
};

export default Photo;
