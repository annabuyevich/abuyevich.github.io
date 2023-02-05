import "./Photos.css";
import photo from "./assets/img3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

const Photo = () => {
  return (
    <section className="panel photos">
      <img src={photo} alt="me" />

      <h2>
        These photos were captured in Colorado
        <FontAwesomeIcon icon={faMountainSun} />
      </h2>
    </section>
  );
};

export default Photo;
