import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class Line extends Component {
  getOption = () => {
    return {
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
            color: "#8791af",
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
            color: "#8791af"
          },
        },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
        },
      ],
      color: ["#34c38f"],
      textStyle: {
        color: ["#8791af"],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
    )
  }
}
export default Line
