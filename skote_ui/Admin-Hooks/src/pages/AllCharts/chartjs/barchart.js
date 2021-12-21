import React from "react"
import { Bar } from "react-chartjs-2"

const BarChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales Analytics",
        backgroundColor: "rgba(52, 195, 143, 0.8)",
        borderColor: "rgba(52, 195, 143, 0.8)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(52, 195, 143, 0.9)",
        hoverBorderColor: "rgba(52, 195, 143, 0.9)",
        data: [65, 59, 81, 45, 56, 80, 50, 20],
      },
    ],
  }

  const option = {
    scales: {
      dataset: [
        {
          barPercentage: 0.4,
        },
      ],
    },
  }

  return <Bar width={474} height={300} data={data} options={option} />
}

export default BarChart
