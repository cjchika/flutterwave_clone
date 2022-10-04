import { Fragment } from "react";
import MenuNavigation from "./components/MenuNavigation";
import Layout from "./components/Layout";
import Hero from "./components/Hero";

function App() {
  return (
    <Fragment>
      <MenuNavigation />
      <Layout>
        <Hero />
      </Layout>
    </Fragment>
  );
}

export default App;
