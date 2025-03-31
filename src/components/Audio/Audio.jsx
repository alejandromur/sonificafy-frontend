export default function Audio({ src }) {
  return (
    <audio controls>
      <source src={src} type="audio/wav" />
      Your browser don't support audio files
    </audio>
  );
}
