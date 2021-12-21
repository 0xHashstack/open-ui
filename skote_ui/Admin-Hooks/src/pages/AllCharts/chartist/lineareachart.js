import React from "react"
import ChartistGraph from "react-chartist"

const lineareachart = () => {
  const lineChartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]]
  }
  const lineChartOptions = {
    low: 0,
    showArea: true
  }
  return (
    <React.Fragment>
      <ChartistGraph
        style={{ height: "300px" }}
        data={lineChartData}
        options={lineChartOptions}
        type={"Line"}
      />
    </React.Fragment>
  )
}
export default lineareachart
