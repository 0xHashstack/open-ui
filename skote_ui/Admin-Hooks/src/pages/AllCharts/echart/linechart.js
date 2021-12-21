import React from "react";
import ReactEcharts from "echarts-for-react";

const Line = () => {
  const options = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      zlevel: 0,
      x: 50,
      x2: 50,
      y: 30,
      y2: 30,
      borderWidth: 0,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLable: {
        color: "#ffffff",
      },
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLable: {
        color: "#ffffff",
      },
      axisLine: {
        lineStyle: {
          color: "#74788d",
        },
      },
    },
    series: [
      {
        data: [620, 832, 750, 934, 1290, 1330, 1400],
        type: "line",
      },
    ],
    color: ["#556ee6"],
    textStyle: {
      color: ["#74788d"],
    },
  };
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default Line;
