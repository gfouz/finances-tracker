"use client";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import { useTransaction } from "../(store)/store";

export function ExpenseChart() {
  const transactions = useTransaction((state) => state.transactions);
  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - expensesPercentage;

  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
        <div>
          <h1>No data yet</h1>
        </div>
      
    );
  }

  return (
    <div>
      <VictoryChart domainPadding={25} theme={VictoryTheme.material}>
        <VictoryBar
          labels={({ datum }) => `${datum.y} %`}
          animate={{
            duration: 2000,
          }}
          categories={{ x: ["Incomes", "Expenses"] }}
          data={[
            { x: "Expenses", y: expensesPercentage },
            { x: "Incomes", y: incomesPercentage },
          ]}
        />
      </VictoryChart>
    </div>
  );
}
