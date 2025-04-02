import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Waves } from "./Waves";

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <Waves />
    </>
  );
};
