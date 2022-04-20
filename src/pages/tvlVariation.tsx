import React, {useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_DEPOSIT_DATA } from "../graphQL/queries";
import {groupBy} from "../blockchain/utils";
import {
    Row,
    Col,
    Table
} from "reactstrap";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { EventMap } from 'blockchain/constants';
import {cacheService} from '../helpers/CacheService';

  
const TVLVariation = () => {
    const [barDataByMarkets , setBarDataByMarket] = useState([]);
    const [barDataByCommitment , setBarDataByCommitment] = useState([]);

    const {error, loading, data} = useQuery(GET_DEPOSIT_DATA,{
        variables: { first: 100 },
    });
    
    useEffect(() => {
        if (data) {
          setFormatedDataByMarkets(data);
          setFormatedDataByCommitment(data)
          filterNetDeposits(data);
        } 
    }, [data]);
    
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
          res.push({ name: EventMap[keyName], Committment: depositByCommitment[key] ? depositByCommitment[key].length*1 : 0, amt: 2000});
        });
        // console.log(res);
        setBarDataByCommitment(res);
        cacheService.setItem("DepositDataByCommitement", res);
    }

    function filterNetDeposits(data) {
        const res = data.deposits.filter(item => {
            return item.user.address.toUpperCase() === cacheService.getItem('account').toUpperCase();
        });
        const depositByMarket = groupBy(res, 'market');
        // console.log(depositByMarket);
        const keys = ["USDT.t", "USDC.t", "WBNB", "BTC.t"];//Object.keys(depositByMarket);
        // console.log(keys);
        const res1 = [];
        keys.forEach((key) => {
          let keyName = key;
          res1.push({ name: EventMap[keyName.toUpperCase()], Deposits: depositByMarket[key] ? depositByMarket[key].length*1 : 0, amt: 2000});
        });
        console.log(res1);
        cacheService.setItem("NetDepositData", res1);
    }

    return (
        <Row>
            <Col sm="6">
            <BarChart
                width={600}
                height={400}
                data={barDataByMarkets}
                margin={{
                    top: 20,
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
                <Bar dataKey="Deposits" stackId="a" fill="#8884d8" />
                </BarChart>
            {/* <LineChart
            width={550}
            height={400}
            data={data}
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
                <Line type="monotone" dataKey="deposits" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="borrows" stroke="#82ca9d" />
            </LineChart> */}
            {/* <Table className="table table-nowrap align-middle mb-0">
                <thead>
                <tr style={{ borderStyle: "hidden" }}>
                    <th scope="col">Markets</th>
                    <th scope="col">Deposits</th>
                    <th scope="col">Commitment</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <div className="text-muted">{"data"}</div>
                    </td>
                    <td>
                    <div className="text-muted">{"Data"}</div>
                    </td>
                    <td>
                    <div className="text-muted">{"Data"}</div>
                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="text-muted">{"data"}</div>
                    </td>
                    <td>
                    <div className="text-muted">{"Data"}</div>
                    </td>
                    <td>
                    <div className="text-muted">{"Data"}</div>
                    </td>
                </tr>
                </tbody>
            </Table> */}
            </Col>
            <Col sm="6">
            <BarChart
                width={600}
                height={400}
                data={barDataByCommitment}
                margin={{
                    top: 20,
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
                <Bar dataKey="Committment" stackId="a" fill="#82ca9d" />
                </BarChart>
            </Col>
    </Row>
      )
}

export default TVLVariation;
