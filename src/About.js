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
        Though it took me a while to figure out, my name is AH-na. I'm a
        software engineer. I like thinking about code. Some of my interests
        include backend work, delving into new frameworks, piano, learning new
        languages, and traveling.
      </p>
    </section>
  );
};

export default About;
