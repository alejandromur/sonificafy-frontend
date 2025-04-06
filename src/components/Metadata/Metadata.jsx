export default function Metadata({ data }) {
  const { fileName, originalUrl, timestamp } = data;
  const timestampLocale = new Date(timestamp).toLocaleString();
  return (
    <ul className="metadata-list">
      {originalUrl && (
        <li>
          <a href={originalUrl} target="_blank" rel="noreferrer noopener">
            {originalUrl}
          </a>
        </li>
      )}
      {(fileName || timestamp) && (
        <li className="metadata-data">
          {fileName && <span className="metadata-fileName">{fileName}</span>}
          {timestamp && (
            <span className="metadata-timestamp">{timestampLocale}</span>
          )}
        </li>
      )}
    </ul>
  );
}
