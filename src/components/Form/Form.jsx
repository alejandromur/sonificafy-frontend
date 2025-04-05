import { useState } from "react";
import { Metadata } from "../Metadata";
import { Audio } from "../Audio";
import { validateUrl } from "../../utils";

export default function Form() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [audioData, setAudioData] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scriptVariant, setScriptVariant] = useState("html_to_sound_space");

  const clearComponent = () => {
    setAudioData({});
    setAudioUrl(null);
    setError("");
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    clearComponent();
    setIsLoading(true);

    if (!url) {
      setError("Add a valid URL");
      setIsLoading(false);
      return;
    }

    if (!validateUrl(url)) {
      setError("Add a valid URL");
      setIsLoading(false);
      return;
    }

    try {
      const rawResponse = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/sonification`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url,
            scriptVariant,
          }),
        }
      );

      if (!rawResponse.ok) {
        throw new Error(`HTTP error! status: ${rawResponse.status}`);
      }

      const data = await rawResponse.json();
      setAudioData(data.processingInfo);

      if (data.processingInfo.fileName) {
        setAudioUrl(
          `${import.meta.env.VITE_API_BASE_URL}/audio/${
            data.processingInfo.fileName
          }`
        );
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error while processing the request:", error);
      setError("An error occurred while processing the URL");
      setIsLoading(false);
    }
  };

  return (
    <section className="form-wrapper">
      <form className="form">
        <div className="form-select-wrapper">
          <label htmlFor="script-variant">Choose a variant:</label>
          <select
            id="script-variant"
            onChange={(e) => setScriptVariant(e.target.value)}
          >
            <option value="html_to_sound_space">Space</option>
            <option value="html_to_sound">Spaceship</option>
            <option value="john_frusciante_inspiration">John Frusciante</option>
            <option value="didgeridoo">Rythm</option>
            <option value="html_to_sound_trigrams">Trigrams</option>
          </select>
        </div>
        <div className="form-input-wrapper">
          <input
            className="form-input"
            name="url"
            type="text"
            inputMode="url"
            placeholder="https://example.com"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
              setError("");
            }}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "url-error" : undefined}
            disabled={isLoading}
          />
          <button className="form-submit" type="button" onClick={handleSubmit}>
            Submit
          </button>
          {error && (
            <p id="url-error" className="form-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </form>
      <div className="form-audio-wrapper">
        {isLoading ? <p>Loading...</p> : null}
        {audioUrl ? <Audio src={audioUrl} /> : null}
        {audioData ? <Metadata data={audioData} /> : null}
      </div>
    </section>
  );
}
