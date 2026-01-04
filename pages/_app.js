import { Fragment } from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavState>
        <ColorState>
          <Component {...pageProps} />
          <PreLoader />
        </ColorState>
      </NavState>
    </Fragment>
  );
}

export default MyApp;
