import React, {useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_TVL_DATA } from "../graphQL/queries";
import {BNtoNum} from "../blockchain/utils";
import {
    Row,
    Col,
    Table
} from "reactstrap";
import { TimeSeries } from "pondjs";
import {
    Resizable,
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
  } from "react-timeseries-charts";
import {cacheService} from '../helpers/CacheService';

  
const TVLVariation = () => {
    const [tvlData , setTvlData] = useState([]);
    const [series, setSeries] = useState(new TimeSeries({
        name: "TVL Variations",
        columns: ["time", "value"],
        points: []
    }));
    const {error, loading, data} = useQuery(GET_TVL_DATA,{
        variables: { first: 100 },
    });
    
    useEffect(() => {
        if (data) {
          console.log(data);  
          setFormatedData(data);
        } 
    }, [data]);

    useEffect(() => {
        if (tvlData.length > 0) {
            const ser = new TimeSeries({
                name: "TVL Variations",
                columns: ["time", "value"],
                points: tvlData
            })
            setSeries(ser);
        } 
    }, [tvlData]);
    
    function setFormatedData(data) {
        const res = [];
        data.reserves.forEach(item => {
            res.push([
                item.date, BNtoNum(item.amount, 8)
            ]);
        });
        setTvlData(res);
        cacheService.setItem("TVLData", res);
    }
  
    const style = {
        value: {
            stroke: "#8884d8",
            strokeWidth: 2,
            opacity: 0.3
        }
    };


    const axisStyle = {
        labels: { labelColor: "Red", labelWeight: 100, labelSize: 14 },
        axis: { axisColor: "White" }
    };

    return (
        <Row>
            <Col sm="12">{
                series.timerange() ? <Resizable>
                <ChartContainer timeRange={series.timerange()} timeAxisStyle={axisStyle}>
                <ChartRow height="450">
                    <YAxis
                    style={axisStyle}
                    id="amount"
                    // label="Amount"
                    min={0}
                    max={10000}
                    width="80"
                    format=""
                    />
                    <Charts>
                    <LineChart axis="amount" series={series} style={style} />
                    </Charts>
                </ChartRow>
                </ChartContainer>
            </Resizable>: "No Chart Available"
            }

            </Col>
    </Row>
      )
}

export default TVLVariation;
