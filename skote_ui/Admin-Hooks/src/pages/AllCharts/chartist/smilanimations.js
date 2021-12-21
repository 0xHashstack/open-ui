import React from "react"
import ChartistGraph from "react-chartist"

const smilanimations = () => {
  const smilChartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
    ]
  }
  const smilChartOptions = {
    high: 12.5,
    low: 0
  }

  return (
    <ChartistGraph
      data={smilChartData}
      style={{ height: "300px" }}
      options={smilChartOptions}
      type={"Line"}
    />
  )
}

export default smilanimations
