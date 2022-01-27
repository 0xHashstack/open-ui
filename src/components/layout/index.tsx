// import React, { useEffect, useState, useContext, useCallback } from 'react';
// import PropTypes from "prop-types"
// import axios from "axios";
// import { Button, Container, Row, Col } from "reactstrap";

// //actions
// import {
//   changeLayout,
//   changeTopbarTheme,
//   changeLayoutWidth,
//   showRightSidebarAction
// } from "../../store/actions"

// //redux
// import { useSelector, useDispatch } from "react-redux"

// //components
// import Header from "./Header.js"
// import Footer from "./Footer"

// import { Web3ModalContext } from "../../contexts/Web3ModalProvider";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

// const Layout = (props) => {

//   const dispatch = useDispatch()
//   const [checkAccess, setCheckAccess] = useState(true);
//   const [accountWhitelisted, setAccountWhitelisted] = useState(false);

//   const { connect, disconnect, account } = useContext(Web3ModalContext);

//   useEffect(() => {
//     if (account) {
//       axios.get(`isWhiteListedAccount?address=${account}`)
//         .then(res => {
//           if (res.data) {
//             setCheckAccess(res.data.isWhiteListed)
//             localStorage.setItem('authWhitelist', JSON.stringify({ 'account': account, 'whiteListed': res.data.isWhiteListed }))
//           }
//         })
//         .catch(err => console.log("Error", err))
//     }
//   }, [account])

//   const handleConnectWallet = useCallback(() => {
//     connect();
//   }, [connect]);

//   const {
//     topbarTheme, layoutWidth, isPreloader, showRightSidebar
//   } = useSelector((state: IRootState) => ({
//     topbarTheme: state.Layout.topbarTheme,
//     layoutWidth: state.Layout.layoutWidth,
//     isPreloader: state.Layout.isPreloader,
//     showRightSidebar: state.Layout.showRightSidebar,
//   }))

//   //hides right sidebar on body click
//   const hideRightbar = (event) => {
//     var rightbar = document.getElementById("right-bar");
//     //if clicked in inside right bar, then do nothing
//     if (rightbar && rightbar.contains(event.target)) {
//       return;
//     } else {
//       //if clicked in outside of rightbar then fire action for hide rightbar
//       dispatch(showRightSidebarAction(false));
//     }
//   };

//   /*
//   layout settings
//   */
//   useEffect(() => {
//     dispatch(changeLayout("horizontal"));
//   }, [dispatch]);

//   useEffect(() => {
//     //init body click event fot toggle rightbar
//     document.body.addEventListener("click", hideRightbar, true);

//     if (isPreloader === true) {
//       (document.getElementById("preloader") as HTMLInputElement).style.display = "block";
//       (document.getElementById("status") as HTMLInputElement).style.display = "block";

//       setTimeout(function () {
//         (document.getElementById("preloader") as HTMLInputElement).style.display = "none";
//         (document.getElementById("status") as HTMLInputElement).style.display = "none";
//       }, 2500)
//     } else {
//       (document.getElementById("preloader") as HTMLInputElement).style.display = "none";
//       (document.getElementById("status") as HTMLInputElement).style.display = "none";
//     }
//   }, [isPreloader])

//   useEffect(() => {
//     if (topbarTheme) {
//       dispatch(changeTopbarTheme(topbarTheme));
//     }
//   }, [dispatch, topbarTheme]);

//   useEffect(() => {
//     if (layoutWidth) {
//       dispatch(changeLayoutWidth(layoutWidth));
//     }
//   }, [dispatch, layoutWidth]);

//   const [isMenuOpened, setIsMenuOpened] = useState(false);
//   const openMenu = () => {
//     setIsMenuOpened(!isMenuOpened);
//   }

//   const handleAccountWhitelist = () => {
//     axios.post(`addAccount`,
//       {
//         "address": account,
//         "whiteListed": true
//       })
//       .then(res => {
//         if (res.data) {
//           setAccountWhitelisted(res.data.success);
//           setCheckAccess(true);
//         }
//       })
//       .catch(err => console.log("Error", err))
//   }

//   function switchScreens() {
//     const storedData = localStorage.getItem('authWhitelist');
//     if (account === null && storedData.account === '') {
//       return (
//         <Container>
//           <Row style={{ marginTop: '25ch' }}>
//             <Col lg="12">
//               <div className="text-center mb-5">
//                 <h4 className="font-weight-medium">Connect your wallet to access Hashstack&apos;s closed beta testnet</h4>
//                 <div className="mt-5 text-center">
//                   <Button
//                     color="dark"
//                     outline
//                     className="btn-outline"
//                     onClick={handleConnectWallet}
//                   >
//                     Connect Wallet
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       )
//     } else if (account !== null && checkAccess === false) {
//       return (
//         <Container>
//           <Row style={{ marginTop: '25ch' }}>
//             <Col lg="12">
//               <div className="text-center mb-5">
//                 <h4 className="font-weight-medium">Uh, oh!</h4>
//                 <h4 className="font-weight-medium">It appears though you are not whitelisted. You can request for whitelist from below</h4>
//                 <div className="mt-5 text-center">
//                   <Button
//                     color="dark"
//                     outline
//                     className="btn-outline"
//                     onClick={handleAccountWhitelist}
//                   >
//                     Request to Whitelist
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       )
//     } else if (account !== null && checkAccess === true) {
//       return (
//         <div id="layout-wrapper">
//           <Header
//             theme={"Light"}
//             isMenuOpened={isMenuOpened}
//             openLeftMenuCallBack={openMenu}
//           />
//           <div className="main-content">{props.children}</div>
//           <Footer />
//         </div>
//       )
//     }
//   }

//   return (
//     <React.Fragment>
//       <div id="preloader">
//         <div id="status">
//           <div className="spinner-chase">
//             <div className="chase-dot" />
//             <div className="chase-dot" />
//             <div className="chase-dot" />
//             <div className="chase-dot" />
//             <div className="chase-dot" />
//             <div className="chase-dot" />
//           </div>
//         </div>
//       </div>

//       {switchScreens()}
//     </React.Fragment >
//   );
// }

// Layout.propTypes = {
//   changeLayout: PropTypes.func,/*  */
//   changeLayoutWidth: PropTypes.func,
//   changeTopbarTheme: PropTypes.func,
//   children: PropTypes.object,
//   isPreloader: PropTypes.any,
//   layoutWidth: PropTypes.any,
//   location: PropTypes.object,
//   showRightSidebar: PropTypes.any,
//   topbarTheme: PropTypes.any
// }

// export default Layout;