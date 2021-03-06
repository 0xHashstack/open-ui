import React from "react";
import { Spinner } from "reactstrap";
import {
  EventMap, CoinClassNames
} from '../blockchain/constants';
import { BNtoNum } from '../blockchain/utils';


let PassbookTBody = (props) => {
  const assets = props.assets;
  if (props.isloading && assets.length === 0) {
    return (<tr align="center"><td colSpan={6}><Spinner>Loading...</Spinner></td></tr>)
  } else if (Array.isArray(assets) && assets.length > 0) {
    return (
      <>
        {assets
          .map((asset, key) => (
            <tr key={key}>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <div className="avatar-xs me-3">
                    <img src={CoinClassNames[EventMap[asset.loanMarket.toUpperCase()]] || asset.loanMarket.toUpperCase()} />
                  </div>
                  <span>{EventMap[asset.loanMarket.toUpperCase()]}</span>
                </div>
              </th>
              <td>
                <div className="text-muted">{BNtoNum(Number(asset.loanAmount))}</div>
              </td>
              <td>
                <div className="text-muted">{EventMap[asset.commitment]}</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar-xs me-3">
                    <img src={CoinClassNames[EventMap[asset.collateralMarket.toUpperCase()]]} />
                  </div>
                  <span>{EventMap[asset.collateralMarket.toUpperCase()]}</span>
                </div>
              </td>
              <td>
                {/* <h5 className="font-size-14 mb-1">
                  {asset.investRate}
                </h5> */}
                <div className="text-muted">
                  {BNtoNum(Number(asset.collateralAmount))}
                </div>
              </td>
              <td>
                <div className="text-muted">{asset.isSwapped ? 'Yes' : 'No'}</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar-xs me-3">
                    <img src={CoinClassNames[EventMap[asset.currentLoanMarket.toUpperCase()]]} />
                  </div>
                  <span>{EventMap[asset.currentLoanMarket.toUpperCase()]}</span>
                </div>
              </td>
              <td>
                <div className="text-muted">{BNtoNum(Number(asset.currentLoanAmount))}</div>
              </td>
              {/* <td> */}
              {/* <h5 className="font-size-14 mb-1">
                  {asset.loansRate}
                </h5> */}
              {/* <div className="text-muted">
                  {Number(asset.cdr).toFixed(3)}
                </div>
              </td> */}
            </tr>
          ))}
      </>
    );
  } else {
    return (<><tr align="center"><td colSpan={7}>No Records found.</td></tr></>);
  }
}

export default PassbookTBody = React.memo(PassbookTBody);