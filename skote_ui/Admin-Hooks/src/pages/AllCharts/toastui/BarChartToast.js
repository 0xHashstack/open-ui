import React from "react"

import "tui-chart/dist/tui-chart.css"
import { BarChart } from "@toast-ui/react-chart"
import TuiChart from "tui-chart"
import "./toastui.scss"

const theme = {
  chart: {
    background: {
      color: "#fff",
      opacity: 0
    }
  },
  title: {
    color: "#8791af"
  },
  xAxis: {
    title: {
      color: "#8791af"
    },
    label: {
      color: "#8791af"
    },
    tickColor: "#8791af"
  },
  yAxis: {
    title: {
      color: "#8791af"
    },
    label: {
      color: "#8791af"
    },
    tickColor: "#8791af"
  },
  plot: {
    lineColor: "rgba(166, 176, 207, 0.1)"
  },
  series: {
    colors: ["#556ee6", "#34c38f"]
  },
  legend: {
    label: {
      color: "#8791af"
    }
  }
}
TuiChart.registerTheme("skoteTheme", theme)

const BarChartToast = props => {
  const data = {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    series: [
      {
        name: "Budget",
        data: [5000, 3000, 5000, 7000, 6000, 4000],
      },
      {
        name: "Income",
        data: [8000, 1000, 7000, 2000, 5000, 3000],
      },
    ],
  }

  const options = {
    chart: {
      width: props.chartWidth,
      height: 380,
      title: "Monthly Revenue",
      format: "1,000",
    },
    yAxis: {
      title: "Month",
    },
    xAxis: {
      title: "Amount",
      min: 0,
      max: 9000,
      suffix: "$",
    },
    series: {
      showLabel: false,
    },
  }

  return <BarChart data={data} options={options} />
}
export default BarChartToast
