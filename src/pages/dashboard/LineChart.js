import React from "react";
import { Line } from "react-chartjs-2";
import Title from "./Title";


const LineChart = ({ theme }) => {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Balance ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "blue",
        data: [
          2015,
          1465,
          1487,
          1796,
          1387,
          2123,
          2866,
          2548,
          3902,
          4938,
          3917,
          4927,
        ],
      },
      {
        label: "Profit ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "red",
        borderDash: [4, 4],
        data: [
          928,
          734,
          626,
          893,
          921,
          1202,
          1396,
          1232,
          1524,
          2102,
          1506,
          1887,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <Title>Monthly Balance</Title>
      <div className="chart chart-lg mt-3">
        <Line data={data} options={options} />
      </div>
    </React.Fragment>
  );
};

export default LineChart;
