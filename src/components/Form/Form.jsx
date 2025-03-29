export default function Form() {
  const handleSubmit = async (event) => {
    console.log(event.target[0].value, new FormData());
    event.preventDefault();
    const rawResponse = await fetch("http://localhost:3000/api/sonification", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // body: new FormData(),
      body: JSON.stringify({
        url: event.target[0].value,
      }),
    });
    console.log(rawResponse);
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
          value="https://example.com"
        />
      </form>
    </>
  );
}
