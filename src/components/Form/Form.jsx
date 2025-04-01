import { useState } from "react";
import { Metadata } from "../Metadata";
import { Audio } from "../Audio";

export default function Form() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [audioData, setAudioData] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const clearComponent = () => {
    setAudioData({});
    setAudioUrl(null);
    setUrl("");
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!url) {
      setError("Add a valid URL");
      return;
    }

    if (!validateUrl(url)) {
      setError("Add a valid URL");
      return;
    }

    try {
      clearComponent();
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
    } catch (error) {
      console.error("Error while processing the request:", error);
      setError("An error occurred while processing the URL");
    }
  };

  return (
    <section className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
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
          />
          {error && (
            <p id="url-error" className="form-error" role="alert">
              {error}
            </p>
          )}
        </div>
      </form>
      <div className="form-audio-wrapper">
        {audioUrl ? <Audio src={audioUrl} /> : null}
        {audioData ? <Metadata data={audioData} /> : null}
      </div>
    </section>
  );
}
