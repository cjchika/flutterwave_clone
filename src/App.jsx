import { Fragment } from "react";
import MenuNavigation from "./components/MenuNavigation";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Customers from "./components/Customers";
import Partners from "./components/Partners";
import Payment from "./components/Payment";
import Commerce from "./components/Commerce";
import Cards from "./components/Cards";
import APIsection from "./components/APIsection";
import Global from "./components/Global";

function App() {
  return (
    <Fragment>
      <MenuNavigation />
      <Layout>
        <Hero />
        <Customers />
        <Partners />
        <Payment />
        <Commerce />
        <Cards />
        <APIsection />
        <Global />
      </Layout>
    </Fragment>
  );
}

export default App;
