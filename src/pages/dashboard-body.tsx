import React from "react";
import { Spinner } from "reactstrap";
import {
  DepositInterestRates, BorrowInterestRates
} from '../blockchain/constants';

import loadable from '@loadable/component';
const Borrow = loadable(() => import('./borrow'));
const Deposit = loadable(() => import('./deposit'));

let DashboardTBody = (props) => {

  if (props.isloading) {
    return (<tr align="center"><td colSpan={6}><Spinner>Loading...</Spinner></td></tr>)
  } else {
    return (<>
      <tr key={0}>
        <th scope="row">
          <div className="d-flex align-items-center">
            <div className="avatar-xs me-3">
              <img src='./usdt.svg'></img>
            </div>
            <span>{"USDT"}</span>
          </div>
        </th>
        <td>
          <div className="text-muted">{DepositInterestRates[props.depositInterestChange]}</div>
        </td>
        <td>
          <div className="text-muted">
            {BorrowInterestRates[props.borrowInterestChange]}
          </div>
        </td>
        <td style={{ width: "120px" }}>
          <Deposit asset={"USDT"} />
        </td>
        <td style={{ width: "120px" }}>
          <Borrow assetID={"USDT"} title={'USDT'} />
        </td>
      </tr>
      <tr key={1}>
        <th scope="row">
          <div className="d-flex align-items-center">
            <div className="avatar-xs me-3">
              <img src='./usdc.svg'></img>
            </div>
            <span>{"USDC"}</span>
          </div>
        </th>
        <td>
          <div className="text-muted">{DepositInterestRates[props.depositInterestChange]}</div>
        </td>
        <td>
          <div className="text-muted">
            {BorrowInterestRates[props.borrowInterestChange]}
          </div>
        </td>
        <td style={{ width: "120px" }}>
          <Deposit asset={"USDC"} />
        </td>
        <td style={{ width: "120px" }}>
          <Borrow assetID={"USDC"} title={'USDC'} />
        </td>
      </tr>
      <tr key={2}>
        <th scope="row">
          <div className="d-flex align-items-center">
            <div className="avatar-xs me-3">
              <img src='./btc.svg'></img>
            </div>
            <span>{"BTC"}</span>
          </div>
        </th>
        <td>
          <div className="text-muted">{DepositInterestRates[props.depositInterestChange]}</div>
        </td>
        <td>
          <div className="text-muted">
            {BorrowInterestRates[props.borrowInterestChange]}
          </div>
        </td>
        <td style={{ width: "120px" }}>
          <Deposit asset={"BTC"} />
        </td>
        <td style={{ width: "120px" }}>
          <Borrow assetID={"BTC"} title={'BTC'} />
        </td>
      </tr>
      <tr key={3}>
        <th scope="row">
          <div className="d-flex align-items-center">
            <div className="avatar-xs me-3">
              <img src='./bnb.svg'></img>
            </div>
            <span>{"BNB"}</span>
          </div>
        </th>
        <td>
          <div className="text-muted">{DepositInterestRates[props.depositInterestChange]}</div>
        </td>
        <td>
          <div className="text-muted">
            {BorrowInterestRates[props.borrowInterestChange]}
          </div>
        </td>
        <td style={{ width: "120px" }}>
          <Deposit asset={"BNB"} />
        </td>
        <td style={{ width: "120px" }}>
          <Borrow assetID={"BNB"} title={'BNB'} />
        </td>
      </tr>
    </>)
  }
}

export default DashboardTBody = React.memo(DashboardTBody);