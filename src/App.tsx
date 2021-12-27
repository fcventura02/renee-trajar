import { Profile } from "./components/Profile";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Profile />
      </main>
      <Footer />
    </>
  );
}

export default App;
