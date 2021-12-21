import React from "react";
import ReactEcharts from "echarts-for-react";

const Guage = () => {
  const options = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: "Business indicator",
        type: "gauge",
        detail: { formatter: "{value}%" },
        axisLine: {
          lineStyle: {
            color: [
              [0.2, "#02a499"],
              [0.8, "#3c4ccf"],
              [1, "#ec4561"],
            ],
            width: 20,
          },
        },
        data: [{ value: 50, name: "Completion rate" }],
      },
    ],
  };
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};

export default Guage;
