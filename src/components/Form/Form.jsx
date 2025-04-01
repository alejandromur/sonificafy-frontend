import { useState } from "react";
import { Metadata } from "../Metadata";
import { Audio } from "../Audio";

export default function Form() {
  const [url, setUrl] = useState("");
  const [audioData, setAudioData] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);

  const clearComponent = () => {
    setAudioData({});
    setAudioUrl(null);
    setUrl("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    }
  };

  return (
    <section className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          name="url"
          type="text"
          inputMode="url"
          placeholder="https://example.com"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
      </form>
      <div className="form-audio-wrapper">
        {audioUrl ? <Audio src={audioUrl} /> : null}
        {audioData ? <Metadata data={audioData} /> : null}
      </div>
    </section>
  );
}
