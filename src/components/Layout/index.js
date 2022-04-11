import React, { useRef, useLayoutEffect } from "react";
import Helmet from "react-helmet";
import Header from "../Header";
import Cursor from "../cursor";

import {ContainerFluid, Section} from  "./LayoutMoluleStyles";
import { GlobalStyle } from "../../../styles/GlobalStyles";

const Layout = ({ children }) => {
  return (
    <>
    <GlobalStyle />
      <Helmet>
        <title>OP Group</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Cursor />
      <ContainerFluid>
        <Header />
        {children}
      </ContainerFluid>
    </>
  );
};

export default Layout;
