import { Fragment } from "react";
import MenuNavigation from "./components/MenuNavigation";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Customers from "./components/Customers";

function App() {
  return (
    <Fragment>
      <MenuNavigation />
      <Layout>
        <Hero />
        <Customers />
      </Layout>
    </Fragment>
  );
}

export default App;
