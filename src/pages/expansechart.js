import React from 'react'
import DrawerAppBar from '../component/navbar';

import LineChart from "../component/chart";
import {useSelector } from "react-redux";
import { Box } from "@mui/material";

const Expansechart = () => {
    let { bills } = useSelector((state) => state.data);
    let monthMap = new Map();
  for (let i = 1; i <= 12; i++) {
    monthMap.set(i, 0);
  }

  bills.map((bill) => {
    let date = bill.date;
    let month = date.split("-")[0];
    if (monthMap.has(parseInt(month))) {
      monthMap.set(
        parseInt(month),
        parseInt(monthMap.get(parseInt(month))) + parseInt(bill.amount)
      );
    } else {
      monthMap.set( parseInt(month), parseInt(bill.amount));
    }
  });
  let monthEng = [
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
  ];
  const [userData, setUserData] = React.useState({
    labels: Array.from(monthMap.keys()).map((key) => monthEng[key - 1]),
    datasets: [
      {
        label: "Monthly Expense",
        data: Array.from(monthMap.values()),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
        <DrawerAppBar/>
        <Box  component="main" sx={{ p: 10 }}>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 1000,
        }}
      >
        <LineChart chartData={userData} />
      </div>
        </Box>
    </div>

  )
}

export default Expansechart;