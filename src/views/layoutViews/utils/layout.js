import React from "react";

import NavigationBar from "./navigationBar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="custom--layout">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;