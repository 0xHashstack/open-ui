import React from "react"
import ReactApexChart from "react-apexcharts"

const RadialChart = () => {
  const series = [44, 55, 67, 83]
  const options = {
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            },
          },
        },
      },
    },

    labels: ["Computer", "Tablet", "Laptop", "Mobile"],
    colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="380"
    />
  )
}

export default RadialChart
