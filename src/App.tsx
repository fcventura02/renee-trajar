import { Profile } from "./components/Profile";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LoyalClient } from "./components/LoyalClient";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Profile />
        <LoyalClient />
      </main>
      <Footer />
    </>
  );
}

export default App;
