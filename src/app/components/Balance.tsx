"use client";
import s from "./TransactionItem.module.scss";
import { useTransaction } from "../(store)/store";

export function Balance() {
  const transactions = useTransaction((state) => state.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className={s.balance__container}>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}
