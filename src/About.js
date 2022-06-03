import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="panel about">
      <h1>
        Hello
        <FontAwesomeIcon icon={faHandPeace} />
      </h1>
      <p>
        I'm Anna (AH-na), a software engineer who likes thinking about code. My
        interests include solving real-world problems, delving into new
        frameworks, playing piano, learning new languages, and traveling.
      </p>
    </section>
  );
};

export default About;
