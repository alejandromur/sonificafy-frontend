import { Link } from "react-router-dom";

const About = () => {
  return (
    <article className="text">
      <section>
        <h1>Motivation</h1>
        <p>
          Sonificafy was born from curiosity. It emerges from questions that
          lead to more questions.
        </p>
        <ol>
          <li>What is loneliness like in space?</li>
          <li>What can be heard there if sound cannot propagate?</li>
          <li>
            How does{" "}
            <Link
              to="https://soundcloud.com/nasa/chandrarosatvladss-ic-443-jellyfish-sonification?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              NASA
            </Link>{" "}
            get the audio from planets?
          </li>
          <li>
            What is <em>sonification</em>?
          </li>
          <li>Can any pulse be converted into sound?</li>
          <li>Can HTML also be transformed?</li>
        </ol>
      </section>

      <section>
        <h2>Goals</h2>
        <ul>
          <li>Satisfy my curiosity</li>
          <li>Learn new things outside my daily routine</li>
          <li>Have fun programming</li>
        </ul>
      </section>

      <section>
        <h2>Challenge</h2>
        <p>
          Manage to transform HTML into sound despite my limited knowledge of
          Python, which is the programming language I chose for the
          transformation.
        </p>
        <h3>AI</h3>
        <p>
          It has played a crucial role in making this possible, and it has also
          taught me many things I didn't know about sound itself; frequency
          ranges, envelopes, etc.
        </p>
      </section>
    </article>
  );
};

export default About;
