import React, { useEffect, useState } from 'react';

//components
import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"
import HashstackCrypto from '../../pages/hashstack-crypto';

const Layout = (props) => {
  console.log(props)

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header
          theme={"Light"}
          isMenuOpened={isMenuOpened}
          openLeftMenuCallBack={openMenu}
        />
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}


export default Layout;