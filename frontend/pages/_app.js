import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
