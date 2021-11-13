import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // we expect to get a filtered list of expenses
  // we look at each expense to get its month to update the value of the appropriate DataPoint by the expense.amount
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0. We can use the month to pick the right dataPoint by the index, since Jan is 0. Index = Month
    chartDataPoints[expenseMonth].value += expense.amount;  // we increase the value of the given month by the expense.amount
    // and we go through all expenses to sum up all the expenses for each separate month and assign the values to the appropriate months
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
