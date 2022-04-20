import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
    Table
} from "reactstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, Sector, PieChart, Pie } from 'recharts';

import DepositsByMarket from "./depositByMarket";
import LoansByMarket from "./loansByMarket";
import NetDepositVsLoans from "./netDepositVsLoans";
import NetDepositVsProtocolDeposits from "./netDepositVsProtocolDeposits";
import TVLVariation from "./tvlVariation";

const data = [
    {
      name: 'USDT',
      deposits: 4000,
      borrows: 2400,
      amt: 2400,
    },
    {
      name: 'USDC',
      deposits: 3000,
      borrows: 1398,
      amt: 2210,
    },
    {
      name: 'BNB',
      deposits: 2000,
      borrows: 9800,
      amt: 2290,
    },
    {
      name: 'BTC',
      deposits: 2780,
      borrows: 3908,
      amt: 2000,
    }
];

const bardata = [
    {
      name: 'None',
      deposits: 4000,
      borrow: 2400,
      amt: 2400,
    },
    {
      name: 'One Month',
      deposits: 3000,
      borrow: 1398,
      amt: 2210,
    },
    {
      name: 'Two Weeks',
      deposits: 2000,
      borrow: 0,
      amt: 2290,
    },
    {
      name: 'Three months',
      deposits: 2780,
      borrow: 0,
      amt: 2000,
    }
];

const piedata = [
    { name: 'USDC', value: 400 },
    { name: 'USDT', value: 300 },
    { name: 'BNB', value: 300 },
    { name: 'BTC', value: 200 },
];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Deposits ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  
const Analytics = () => {

const [activeIndex, setActiveIndex] = useState(0);
    
const onPieEnter = (_, index) => {
    setActiveIndex(index);
};

    return (
        <React.Fragment>
          <div className="page-content-subTab">
            <Container fluid>
              <div>
                <UncontrolledAccordion
                  defaultOpen={[
                    '1'
                  ]}
                  open='true'
                >
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      Deposit by market & commitment
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                     <DepositsByMarket></DepositsByMarket>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="2">
                      Borrow by market & commitment
                    </AccordionHeader>
                    <AccordionBody accordionId="2">
                        <LoansByMarket></LoansByMarket>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="3">
                    Net Deposits vs Loans
                    </AccordionHeader>
                    <AccordionBody accordionId="3">
                      <NetDepositVsLoans></NetDepositVsLoans>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="4">
                    Net Deposits vs Protocol Deposits
                    </AccordionHeader>
                    <AccordionBody accordionId="4">
                      <NetDepositVsProtocolDeposits></NetDepositVsProtocolDeposits>
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionHeader targetId="5">
                    TVL Variations
                    </AccordionHeader>
                    <AccordionBody accordionId="5">
                      <TVLVariation></TVLVariation>
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </div>
              {/* <Row>
                  <Col sm="6">
                    <PieChart width={500} height={400}>
                        <Pie
                            activeIndex={activeIndex || 0}
                            activeShape={renderActiveShape}
                            data={piedata}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        />
                        </PieChart>
                  </Col>
                  <Col sm="6">
                    <BarChart
                        width={600}
                        height={400}
                        data={bardata}
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
                        <Bar dataKey="deposits" stackId="a" fill="#8884d8" />
                        <Bar dataKey="borrow" stackId="a" fill="#82ca9d" />
                        </BarChart>
                  </Col>
              </Row> */}
            </Container>
          </div>
        </React.Fragment>
      )
}

export default Analytics;
