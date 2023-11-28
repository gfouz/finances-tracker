"use client";
import { useState } from "react";
import s from "./TransactionForm.module.scss";
import { useTransaction } from "../../(store)/store";

export function TransactionForm() {
  const addTransaction = useTransaction((state) => state.addTransaction);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number|string>(0);

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      description,
      amount: +amount,
    });
  };

  return (
    <div>
      <form className={s.form_container} onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setAmount( e.target.value )}
          step="0.01"
          placeholder="0.00"
          value={amount}
        />
        <button className={s.submit_button} disabled={!description || !amount}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
