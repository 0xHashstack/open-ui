import React, {useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_DEPOSIT_DATA } from "../graphQL/queries";
import {groupBy} from "../blockchain/utils";
import {
    Row,
    Col,
    Table
} from "reactstrap";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, LineChart, Line } from 'recharts';
import { EventMap } from 'blockchain/constants';
import {cacheService} from '../helpers/CacheService';


  
const NetDepositVsLoans = () => {
    const [barDataByMarkets , setBarDataByMarket] = useState([]);
    const [barDataByCommitment , setBarDataByCommitment] = useState([]);
    const {error, loading, data} = useQuery(GET_DEPOSIT_DATA,{
        variables: { first: 100 },
    });
    
    const [loansByMarket, setLoansByMarket] = useState([]);
    const [depositsByMarket, setDepositsByMarket] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    
    useEffect(() => {
        if (data) {
          formatData(data);
        }

      },[data]);
    
    useEffect(() => {
      setFormatedDataForLinechart();
    },[depositsByMarket, loansByMarket]);

    async function formatData (data) {
          await setFormatedDataByMarkets(data);
          await setFormatedDataByCommitment(data);

          await setLoansByMarket(cacheService.getItem('LoansDataByMarkets'));
          await setDepositsByMarket(cacheService.getItem('DepositDataByMarkets'));
          
    }  
    
    function setFormatedDataForLinechart() {
        const keys = ["USDT", "USDC", "BNB", "BTC"];
        const res = [];
        if(depositsByMarket.length > 0 && loansByMarket.length > 0) {
          keys.forEach((key, index) => {
            let keyName = key;
            res.push({ name: key, Deposits:  depositsByMarket[index]['Deposits'], Borrows: loansByMarket[index]['Loans'], amt: 2000});
          });
          console.log(res);
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
          res.push({ name: EventMap[keyName.toUpperCase()], Deposits: depositByMarket[key] ? depositByMarket[key].length*1 : 0, amt: 2000});
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
          res.push({ name: EventMap[keyName.toUpperCase()], Committment: depositByCommitment[key] ? depositByCommitment[key].length*1 : 0, amt: 2000});
        });
        // console.log(res);
        setBarDataByCommitment(res);
    }

    return (
          <Row>
              <Col sm="5">
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
                        Deposits
                      </th>
                      <th>
                        Borrows
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      lineChartData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">
                              {index+1}
                            </th>
                            <td>
                              {item.name}
                            </td>
                            <td>
                              {item.Deposits}
                            </td>
                            <td>
                              {item.Borrows}
                            </td>
                         </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Col>
              <Col sm="7">
              <LineChart
              width={700}
              height={400}
              data={lineChartData}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Deposits" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Borrows" stroke="#82ca9d" />
              </LineChart>
              </Col>
            </Row> 

      )
}

export default NetDepositVsLoans;
