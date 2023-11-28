"use client";
import { useEffect } from "react";
import s from "./page.module.scss";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";

function ExpenseTracker() {
  return (
    <div className={s.grid__container}>
      <header className={s.grid__header}>
        <h1>Expense Tracker</h1>
      </header>
      <main className={s.grid__main}>
        <div className={s.form_section}>
          <div className={s.form_body}>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
            <TransactionList />
          </div>
        </div>
        <div className={s.expenseChart}>
          <ExpenseChart />
        </div>
      </main>
      <footer className={s.grid__footer}>
        fouz.Js &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default ExpenseTracker;

/*

 useEffect(() => {
    const value = localStorage.getItem("transaction-storage");
    const result = JSON.parse(value);
    console.log(result.state.transactions);
  });

*/
