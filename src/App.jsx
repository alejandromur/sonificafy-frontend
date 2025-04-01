import { Header, Footer, Form, Waves, Greeting, Main } from "./components";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Greeting />
        <Form />
        <Waves />
      </Main>
      <Footer />
    </>
  );
}

export default App;
