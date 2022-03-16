import React from "react";
import { Spinner } from "reactstrap";
import { DepositInterestRates, BorrowInterestRates
} from '../blockchain/constants';
import Borrow from "./borrow";
import Deposit from "./deposit";

let DashboardTBody = (props) => {

    if (props.isloading) {
      return (<tr align="center"><td colSpan={6}><Spinner>Loading...</Spinner></td></tr>)
    } else {
      return (<>
        <tr key={0}>
          <th scope="row">
            <div className="d-flex align-items-center">
              <div className="avatar-xs me-3">
                <span
                  className={
                    "avatar-title rounded-circle bg-soft bg-" +
                    "info" +
                    " text-" +
                    "info" +
                    " font-size-18"
                  }
                >
                  <i className={"mdi mdi-litecoin"} />
                </span>
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
                <span
                  className={
                    "avatar-title rounded-circle bg-soft bg-" +
                    "primary" +
                    " text-" +
                    "primary" +
                    " font-size-18"
                  }
                >
                  <i className={"mdi mdi-ethereum"} />
                </span>
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
                <span
                  className={
                    "avatar-title rounded-circle bg-soft bg-" +
                    "warning" +
                    " text-" +
                    "warning" +
                    " font-size-18"
                  }
                >
                  <i className={"mdi mdi-bitcoin"} />
                </span>
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
                <span
                  className={
                    "avatar-title rounded-circle bg-soft bg-" +
                    "warning" +
                    " text-" +
                    "warning" +
                    " font-size-18"
                  }
                >
                  <i className={"mdi mdi-drag-variant"} />
                </span>
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