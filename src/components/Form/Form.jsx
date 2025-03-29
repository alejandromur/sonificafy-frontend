import { useState } from "react";

export default function Form() {
  const [audioData, setAudioData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
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
            url: event.target[0].value,
          }),
        }
      );
      const data = await rawResponse.json();
      setAudioData(data.processingInfo);
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
    }
  };

  return (
    <>
      <h1>SONIFICAFY</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="url"
          type="text"
          inputMode="url"
          placeholder="https://example.com"
        />
      </form>
      {audioData ? (
        <ul>
          {audioData.fileName ? <li>{audioData.fileName}</li> : null}
          {audioData.originalUrl ? (
            <li>
              <a
                href={audioData.originalUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {audioData.originalUrl}
              </a>
            </li>
          ) : null}
          {audioData.timestamp ? <li>{audioData.timestamp}</li> : null}
        </ul>
      ) : null}
    </>
  );
}
