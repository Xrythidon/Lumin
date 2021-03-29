import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { Provider } from "react-redux";
import store from "../redux/store";

import dynamic from "next/dynamic";
//import Header from "../components/Header";
import Footer from "../components/Footer";

const Header = dynamic(() => import("../components/Header"));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {typeof window !== "undefined" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
