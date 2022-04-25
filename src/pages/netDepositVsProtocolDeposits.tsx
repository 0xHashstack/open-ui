import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_DEPOSIT_DATA } from "../graphQL/queries";
import { groupBy } from "../blockchain/utils";
import {
  Row,
  Col,
  Table
} from "reactstrap";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, LineChart, Line } from 'recharts';
import { EventMap } from 'blockchain/constants';
import { cacheService } from '../helpers/CacheService';

const NetDepositVsProtocolDeposits = () => {
  const [barDataByMarkets, setBarDataByMarket] = useState([]);
  const [barDataByCommitment, setBarDataByCommitment] = useState([]);
  const { error, loading, data } = useQuery(GET_DEPOSIT_DATA, {
    variables: { first: 100 },
  });

  // const [loansByMarket, setLoansByMarket] = useState([]);
  const [netDepositsByMarket, setNetDepositsByMarket] = useState([]);
  const [protocolDepositsByMarket, setProtocolDepositsByMarket] = useState([]);
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    if (data) {
      formatData(data);
    }

  }, [data]);

  useEffect(() => {
    setFormatedDataForLinechart();
  }, [netDepositsByMarket, protocolDepositsByMarket]);

  async function formatData(data) {
    await setFormatedDataByMarkets(data);
    await setFormatedDataByCommitment(data);

    await setProtocolDepositsByMarket(cacheService.getItem('DepositDataByMarkets'));
    await setNetDepositsByMarket(cacheService.getItem('NetDepositData'));

  }

  function setFormatedDataForLinechart() {
    const keys = ["USDT", "USDC", "BNB", "BTC"];
    const res = [];
    if (netDepositsByMarket?.length > 0 && protocolDepositsByMarket.length > 0) {
      keys.forEach((key, index) => {
        let keyName = key;
        res.push({ name: key, NetDeposits: netDepositsByMarket[index]['Deposits'], ProtocolDeposits: protocolDepositsByMarket[index]['Deposits'], amt: 2000 });
      });
      // console.log(res);
      setLineChartData(res);
    }
  }
  function setFormatedDataByMarkets(data) {
    const depositByMarket = groupBy(data.deposits, 'market');
    // console.log(depositByMarket);
    const keys = ["USDT.t", "USDC.t", "WBNB", "BTC.t"];//Object.keys(depositByMarket);
    // console.log(keys);
    const res = [];
    keys.forEach((key) => {
      let keyName = key;
      res.push({ name: EventMap[keyName.toUpperCase()], Deposits: depositByMarket[key] ? depositByMarket[key].length * 1 : 0, amt: 2000 });
    });
    // console.log(res);
    cacheService.setItem("DepositDataByMarkets", res);
    setBarDataByMarket(res);
  }
  function setFormatedDataByCommitment(data) {
    const depositByCommitment = groupBy(data.deposits, 'commitment');
    // console.log(depositByCommitment);
    const keys = Object.keys(depositByCommitment);
    // console.log(keys);
    const res = [];
    keys.forEach((key) => {
      let keyName = key;
      res.push({ name: EventMap[keyName.toUpperCase()], Committment: depositByCommitment[key] ? depositByCommitment[key].length * 1 : 0, amt: 2000 });
    });
    // console.log(res);
    setBarDataByCommitment(res);
  }

  return (
    <>
      <Row >
        <Col sm="3" ></Col>
        <Col sm="6">
          <h3 style={{marginTop: "50px", textAlign:"center"}}>Net Deposits VS Protocol Deposits</h3>
        </Col>
        <Col sm="3"></Col>
      </Row>
      <Row>
        <Col sm="4">
          <Table hover>
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Market
                </th>
                <th>
                  Net Deposits
                </th>
                <th>
                  Protocol Deposits
                </th>
              </tr>
            </thead>
            <tbody>
              {
                lineChartData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">
                        {index + 1}
                      </th>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.NetDeposits}
                      </td>
                      <td>
                        {item.ProtocolDeposits}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
        <Col sm="8">
          <LineChart
            width={800}
            height={280}
            data={lineChartData}
            margin={{
              top: 25,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={false}/>
            <Legend />
            <Line type="monotone" dataKey="NetDeposits" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="ProtocolDeposits" stroke="#82ca9d" />
          </LineChart>
        </Col>
      </Row>
    </>
  )
}

export default NetDepositVsProtocolDeposits;
