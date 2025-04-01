import { useState } from "react";
import { Metadata } from "../Metadata";
import { Audio } from "../Audio";

export default function Form() {
  const [audioData, setAudioData] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);

  const clearComponent = () => {
    setAudioData({});
    setAudioUrl(null);
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
            url: event.target[0].value,
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
    <section className="form">
      <form onSubmit={handleSubmit}>
        <input
          name="url"
          type="text"
          inputMode="url"
          placeholder="https://example.com"
        />
      </form>
      {audioUrl ? <Audio src={audioUrl} /> : null}
      {audioData ? <Metadata data={audioData} /> : null}
    </section>
  );
}
