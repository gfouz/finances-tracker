// we have used () brackets so that app folder will not recognise (store) as any route
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

 export interface State {
  transactions: Transaction[];
  addTransaction:(transaction: Transaction)=>void;
  deleteTransaction: (id: string)=>void;
 }

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}
const transactionStore = persist<State>(
  (set) => ({
    transactions: [],
    addTransaction: (transaction: Transaction ) => {
      set((state: State) => {
        const newTransactions = [...state.transactions, transaction];
        return {
          ...state,
          transactions: newTransactions,
        };
      });
    },
    deleteTransaction: (id: string) => {
      set((state: State) => {
        const currentTransaction = state.transactions.filter(
          (transaction: { id: string; }) => transaction.id !== id,
        );
        return {
          ...state,
          transactions: currentTransaction,
        };
      });
    },
  }),
  {
    name: "transaction-storage", // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  },
);
export const useTransaction = create(transactionStore);
