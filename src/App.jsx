import { Fragment } from "react";
import MenuNavigation from "./components/MenuNavigation";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Customers from "./components/Customers";
import Partners from "./components/Partners";
import Payment from "./components/Payment";

function App() {
  return (
    <Fragment>
      <MenuNavigation />
      <Layout>
        <Hero />
        <Customers />
        <Partners />
        <Payment />
      </Layout>
    </Fragment>
  );
}

export default App;
