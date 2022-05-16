import React from 'react'
import './index.scss';
export default function index() {


  const handleClose = () => {
    document.getElementById("cookie-banner").style.display = "none";
  }
  return (
    <>
        <div className="cookie-banner" id="cookie-banner" >
          <p className="cookie-banner-text">&quot;These features will be activated on 28th Feb 2022 - swapLoan &amp; swapToLaon, repayLaon, withdrawCollateral&quot;
          </p>
        <button className="close" onClick={handleClose}>&times;</button>
        </div>
    </>

  )
}
