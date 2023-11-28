"use client";
import { useTransaction } from "../(store)/store";
import s from "./IncomeExpenses.module.scss";

export function IncomeExpenses() {
  const transactions = useTransaction((state) => state.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className={s.income_expense_container}>
      <h2>Income</h2>
      <p>{income}</p>
      <h2>Expense</h2>
      <p>{expense}</p>
    </div>
  );
}
