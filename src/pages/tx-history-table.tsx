import React, { useState, useEffect } from "react"
import { Table } from "reactstrap"
import { BNtoNum } from "../blockchain/utils"
import "react-toastify/dist/ReactToastify.css"
import { txHistory } from "./passbook-history"

const TxHistoryTable = props => {
  const { account, commitment } = props.asset
  const { type, market } = props
  const [txHistoryData, setTxHistoryData] = useState(null)
  useEffect(() => {
    txHistory(type, account, market, `comit_${commitment}`).then(res => {
      setTxHistoryData(res)
    })
  }, [type, account, market])

  const renderTableData = () => {
    return (
      txHistoryData &&
      txHistoryData.map((row, index) => {
        const { id, timestamp, amount, action } = row
        let myDate = new Date( timestamp *1000);
        var formattedDate = myDate.toLocaleString()

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
            <td>{action}</td>
            <td>
              {formattedDate}
            </td>
            <td>{parseFloat(BNtoNum(Number(amount))).toFixed(6)}</td>
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
            <th>Action Type</th>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </div>
  )
}

export default TxHistoryTable
