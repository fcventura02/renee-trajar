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
  FloatingButton,
} from "./components";
import styles from "./styles/styles.module.scss";

function App() {
  return (
    <>
      <Header />
      <main className={styles.floating_container}>
        <Banner />
        <Profile />
        <LoyalClient />
        <Objective />
        <Promotion />
        <Products />
        <Testimony />
        <Contacts />
        <FloatingButton type="whatsapp" href="#"/>
      </main>
      <Footer />
    </>
  );
}

export default App;
