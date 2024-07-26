import { ADD_EXPENSE, DELETE_EXPENSE } from "./types";
import { v4 as uuidv4 } from 'uuid';

// Action creators
export const addExpense = ({ name, amount, spendDate, category }) => ({
    type: ADD_EXPENSE,
    payload: {
       id: uuidv4(),
       name,
       amount,
       spendDate,
       category
    }
 });

 export const deleteExpense = id => ({
    type: DELETE_EXPENSE,
    payload: {
       id
    }
 });