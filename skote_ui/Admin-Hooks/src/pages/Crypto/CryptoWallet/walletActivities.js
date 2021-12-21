import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody, NavItem, NavLink } from "reactstrap"
import classnames from "classnames"
import cryptoWalletColumns from "./cryptoWalletColumns"

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const WalletActivities = ({ walletHistory, activeTab, toggleTab }) => {
  const data = {
    columns: cryptoWalletColumns,
    rows: walletHistory,
  }

  const columns = [{
    dataField: 'idno',
    text: 'Id No'
  },{
    dataField: 'pdate',
    text: 'Date'
  }, {
    dataField: 'type',
    text: 'Type'
  }, {
    dataField: 'coin',
    text: 'Currency'
  },{
    dataField: 'amount',
    text: 'Amount'
  },{
    dataField: 'valueInUsd',
    text: 'value in USD'
  }];

  // Table Data
const productData = [
  { id: 1, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
  { id: 2, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 3, idno:"#SK3226", pdate : "13 Jun, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
  { id: 4, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 5, idno:"#SK3226", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 6, idno:"#SK3116", pdate : "03 Mar, 2020",type:"Sell",coin:"Ethereum",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
  { id: 7, idno:"#SK3336", pdate : "13 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 8, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 9, idno:"#SK3226", pdate : "23 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 10, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 11, idno:"#SK3226", pdate : "08 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 12, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 13, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
  { id: 14, idno:"#SK3336", pdate : "07 Mar, 2020",type:"Sell",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 15, idno:"#SK3226", pdate : "13 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 16, idno:"#SK3226", pdate : "03 Mar, 2020",type:"Buy",coin:"Ethereum",amount:"0.00413 ETH",valueInUsd:"$ 1773.01"},
  { id: 17, idno:"#SK3336", pdate : "03 Mar, 2020",type:"Buy",coin:"Litecoin",amount:"0.00413 LTC",valueInUsd:"$ 1773.01"},
 
  ];

  return (
    <Card>
      <CardBody>
        <h4 className="card-title mb-4">Activities</h4>
        <ul className="nav nav-tabs nav-tabs-custom">
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "1",
              })}
              onClick={() => {
                toggleTab("1")
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "2",
              })}
              onClick={() => {
                toggleTab("2")
              }}
            >
              Buy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: activeTab === "3",
              })}
              onClick={() => {
                toggleTab("3")
              }}
            >
              Sell
            </NavLink>
          </NavItem>
        </ul>

        <div className="mt-4">
        <BootstrapTable keyField='id' data={ productData } columns={ columns } pagination={ paginationFactory() } />
        </div>
      </CardBody>
    </Card>
  )
}

WalletActivities.propTypes = {
  walletHistory: PropTypes.array,
  activeTab: PropTypes.string,
  toggleTab: PropTypes.func,
}

export default WalletActivities
