import React from "react"
import { Polar } from "react-chartjs-2"

const PolarChart = () => {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 18],
        backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#556ee6"],
        label: "My dataset", // for legend
        hoverBorderColor: "#fff",
      },
    ],
    labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
  }

  return <Polar width={474} height={300} data={data} />
}

export default PolarChart
