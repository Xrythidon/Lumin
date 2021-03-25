import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { Provider } from "react-redux";
import store from "../redux/store";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;