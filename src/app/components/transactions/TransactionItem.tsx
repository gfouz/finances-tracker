import { useTransaction, Transaction } from "../../(store)/store";
import s from "./TransactionItem.module.scss";
import BiTrash from "../icons/Bitrash";

interface TransactionItem {
  transaction: Transaction;
}
export function TransactionItem({ transaction: { id, date, description, amount } }: TransactionItem) {
  const deleteTransaction = useTransaction((state) => state.deleteTransaction);
  const sign = amount < 0 ? "-" : "+";
  return (
     <li className={s.list_item}>
      <div className={s.list_item_info}>
      <p>Description: {description}</p>
      <p>Transaction date: {date}</p>
      <p className={ sign === '-' ? s.red :  s. green  }>Amount: {sign}${Math.abs(amount)}</p>
      </div>
      <button onClick={() => deleteTransaction(id)} className={s.delete_button}>
        <BiTrash size="20" color="red" />
      </button>
    </li>
  );
}
