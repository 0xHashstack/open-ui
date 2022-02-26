import React, { useEffect } from 'react'
import './index.scss';
export default function index() {


  const handleClose = () => {
    document.getElementById("cookie-banner").style.display = "none";
  }
  return (
    // <div style={{textAlign: "center"}}>&quot;These features will be activated this Friday - swapLoan &amp; swapToLaon, repayLaon, withdrawCollateral&quot;</div>
    <>
        <div className="cookie-banner" id="cookie-banner" >
          <p className="cookie-banner-text">&quot;These features will be activated on 28th Feb 2022 - swapLoan &amp; swapToLaon, repayLaon, withdrawCollateral&quot;
          </p>
        <button className="close" onClick={handleClose}>&times;</button>
        </div>
    </>

  )
}
