import React, { useState, useEffect, useContext } from "react"
import { Table } from "reactstrap"
import { BNtoNum } from "../blockchain/utils"
import "react-toastify/dist/ReactToastify.css"
import { txHistory } from "./passbook-history"

const TxHistoryTable = props => {
  const { account, market, commitment } = props.asset
  const { type } = props
  const [txHistoryData, setTxHistoryData] = useState(null)

  useEffect(() => {
    const test = txHistory(type, account, market, `comit_${commitment}`).then(
      res => {
        setTxHistoryData(res)
        console.log(res, "txData")
      }
    )
  }, [])

  const renderTableData = () => {
    return (
      txHistoryData &&
      txHistoryData.map((row, index) => {
        const { id, timestamp, amount } = row
        return (
          <tr
            key={index}
            onClick={() => window.open(`https://testnet.bscscan.com/tx/${id}`)}
            style={{ cursor: "pointer" }}
          >
            <td>
              {id.substring(0, 10) +
                "..............." +
                id.substring(id.length - 11)}
            </td>
            <td>
              {((Date.now() / 1000 - timestamp) / 3600).toFixed(2)} hrs ago{" "}
            </td>
            <td>{BNtoNum(Number(amount))}</td>
          </tr>
        )
      })
    )
  }

  return (
    <div className="table-responsive">
      <Table className="table table-nowrap align-middle mb-0 mr-2 ">
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>Age</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </div>
  )
}

export default TxHistoryTable;
