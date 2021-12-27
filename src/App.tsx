import { Profile } from "./components/Profile";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoyalClient } from "./components/LoyalClient";
import { Objective } from "./components/Objective";
import { Promotion } from "./components/Promotion";
import { Products } from "./components/Products";
import { Testimony } from "./components/Testimony";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Profile />
        <LoyalClient />
        <Objective />
        <Promotion />
        <Products />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}

export default App;
