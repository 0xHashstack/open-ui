import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_LOANS_DATA } from "../graphQL/queries";
import { groupBy } from "../blockchain/utils";
import {
    Row,
    Col,
    Table
} from "reactstrap";
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { EventMap } from 'blockchain/constants';
import { cacheService } from '../helpers/CacheService';


const LoansByMarket = () => {
    const [barDataByMarkets, setBarDataByMarket] = useState([]);
    const [barDataByCommitment, setBarDataByCommitment] = useState([]);
    const { error, loading, data } = useQuery(GET_LOANS_DATA, {
        variables: { first: 100 },
    });

    useEffect(() => {
        if (data) {
            setFormatedDataByMarkets(data);
            setFormatedDataByCommitment(data)
        }
    }, [data]);

    function setFormatedDataByMarkets(data) {
        const loanByMarket = groupBy(data.loans, 'initialMarket');
        // console.log(loanByMarket);
        const keys = ["USDT.t", "USDC.t", "WBNB", "BTC.t"];//Object.keys(loanByMarket);
        // console.log(keys);
        const res = [];
        keys.forEach((key) => {
            let keyName = key;
            res.push({ name: EventMap[keyName.toUpperCase()], Loans: loanByMarket[key] ? loanByMarket[key].length * 1 : 0, amt: 2000 });
        });
        // console.log(res);
        cacheService.setItem("LoansDataByMarkets", res);
        setBarDataByMarket(res);
    }
    function setFormatedDataByCommitment(data) {
        const loanByCommitment = groupBy(data.loans, 'commitment');
        // console.log(loanByCommitment);
        const keys = Object.keys(loanByCommitment);
        // console.log(keys);
        const res = [];
        keys.forEach((key) => {
            let keyName = key;
            res.push({ name: EventMap[keyName], Committment: loanByCommitment[key] ? loanByCommitment[key].length * 1 : 0, amt: 2000 });
        });
        // console.log(res);
        cacheService.setItem("LoansDataByCommitment", res);
        setBarDataByCommitment(res);
    }

    return (
        <>
            <Row>
                <Col sm="3"></Col>
                <Col sm="6">
                    <h3 style={{marginTop: "50px", textAlign:"center"}}>Borrow by market & commitment</h3>
                </Col>
                <Col sm="3"></Col>
            </Row>
            <Row>
                <Col sm="6">
                    <BarChart
                        width={500}
                        height={400}
                        data={barDataByMarkets}
                        margin={{
                            top: 20,
                            bottom: 5,
                        }}
                        barCategoryGap={40}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={false}/>
                        <Legend />
                        <Bar dataKey="Loans" stackId="a" fill="#8884d8" />
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
                <Line type="monotone" dataKey="loans" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="borrows" stroke="#82ca9d" />
            </LineChart> */}
                    {/* <Table className="table table-nowrap align-middle mb-0">
                <thead>
                <tr style={{ borderStyle: "hidden" }}>
                    <th scope="col">Markets</th>
                    <th scope="col">loans</th>
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
                        width={500}
                        height={400}
                        data={barDataByCommitment}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barCategoryGap={83}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={false}/>
                        <Legend />
                        <Bar dataKey="Committment" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </Col>
            </Row>
        </>
    )
}

export default LoansByMarket;
