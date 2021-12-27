import { Profile } from "./components/Profile";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoyalClient } from "./components/LoyalClient";
import { Objective } from "./components/Objective";
import { Promotion } from "./components/Promotion";

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
      </main>
      <Footer />
    </>
  );
}

export default App;
