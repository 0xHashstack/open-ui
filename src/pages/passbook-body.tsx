import { Spinner } from "reactstrap";
import {
  EventMap, CoinClassNames, DecimalsMap
} from '../blockchain/constants';
import { BNtoNum } from '../blockchain/utils';


const PassbookTBody = (props) => {
    const assets = props.assets;
    if (props.isloading && assets.length === 0) {
      return (<tr align="center"><td colSpan={4}><Spinner>Loading...</Spinner></td></tr>)
    } else if (assets.length > 0) {
      return (
        <>
          {assets.map((asset, key) => (
            <tr key={key}>
              <th scope="row">
                <div className="d-flex align-items-center">
                  <div className="avatar-xs me-3">
                    <span
                      className={
                        "avatar-title rounded-circle bg-soft bg-" +
                        asset.color +
                        " text-" +
                        asset.color +
                        " font-size-18"
                      }
                    >
                      <i className={CoinClassNames[EventMap[asset.loanMarket.toUpperCase()]] || asset.loanMarket.toUpperCase()} />
                    </span>
                  </div>
                  <span>{EventMap[asset.loanMarket.toUpperCase()]}</span>
                </div>
              </th>
              <td>
                <div className="text-muted">{BNtoNum(Number(asset.loanAmount),DecimalsMap[asset.market])}</div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar-xs me-3">
                    <span
                      className={
                        "avatar-title rounded-circle bg-soft bg-" +
                        asset.color +
                        " text-" +
                        asset.color +
                        " font-size-18"
                      }
                    >
                      <i className={CoinClassNames[EventMap[asset.collateralMarket.toUpperCase()]]} />
                    </span>
                  </div>
                  <span>{EventMap[asset.collateralMarket.toUpperCase()]}</span>
                </div>
              </td>
              <td>
                {/* <h5 className="font-size-14 mb-1">
                  {asset.investRate}
                </h5> */}
                <div className="text-muted">
                  {BNtoNum(Number(asset.collateralAmount), DecimalsMap[asset.market])}
                </div>
              </td>
              <td>
                {/* <h5 className="font-size-14 mb-1">
                  {asset.loansRate}
                </h5> */}
                <div className="text-muted">
                  {Number(asset.cdr).toFixed(3)}
                </div>
              </td>
            </tr>
          ))}
        </>
      );
    } else {
      return (<><tr align="center"><td colSpan={5}>No Records found.</td></tr></>);
    }
  }

  export default PassbookTBody;