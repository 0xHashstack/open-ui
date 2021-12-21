import React from "react"
import ChartistGraph from "react-chartist"

const linechart = () => {
  const lineChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }
  const lineChartOptions = {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  }

  return (
    <React.Fragment>
      <ChartistGraph
        data={lineChartData}
        options={lineChartOptions}
        type={"Line"}
        style={{ height: "300px" }}
      />
    </React.Fragment>
  )
}
export default linechart
