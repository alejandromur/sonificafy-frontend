export default function Metadata({ data }) {
  const { fileName, originalUrl, timestamp } = data;
  return (
    <ul>
      {fileName ? <li>{fileName}</li> : null}
      {originalUrl ? (
        <li>
          <a href={originalUrl} target="_blank" rel="noreferrer noopener">
            {originalUrl}
          </a>
        </li>
      ) : null}
      {timestamp ? <li>{timestamp}</li> : null}
    </ul>
  );
}
