import React from "react"

import ReactApexChart from "react-apexcharts"

const areachart = () => {
  const options = {
    colors: ["#ccc", "#3c4ccf", "#02a499"],
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 0.1,
    },
    grid: {
      borderColor: "#f8f8fa",
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
  }
  const series = [
    {
      name: "Series A",
      data: [0, 150, 60, 180, 90, 75, 30],
    },
    {
      name: "Series B",
      data: [0, 45, 150, 36, 60, 240, 30],
    },
    {
      name: "Series C",
      data: [0, 15, 195, 21, 360, 120, 30],
    },
  ]

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="290"
    />
  )
}

export default areachart
