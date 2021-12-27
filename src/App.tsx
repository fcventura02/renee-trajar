import {
  Profile,
  Banner,
  Footer,
  Header,
  LoyalClient,
  Objective,
  Promotion,
  Products,
  Testimony,
  Contacts,
} from "./components";

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
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
