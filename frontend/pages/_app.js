//import "../styles/globals.scss";
//import "../styles/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { Provider } from "react-redux";
import store from "../redux/store";

import dynamic from "next/dynamic";
//import Header from "../components/Header";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

// Styles
import GlobalStyle from '../styles/globalStyles';

const Header = dynamic(() => import("../components/Header"));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Meta />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
//       {typeof window !== "undefined" && <Header />} <- Header Prop removed for now

export default MyApp;
