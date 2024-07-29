import { ADD_EXPENSE, DELETE_EXPENSE } from '../actions/types';

export default function expensesReducer(state = [], action) {
   switch (action.type) {
      case ADD_EXPENSE:
         return [...state, action.payload];
      case DELETE_EXPENSE:
         return state.filter(expense => expense.id !== action.payload.id);
      case 'contactCapture': {
        const contactCapture = action.payload;
        return {...state, contactCapture};
      }
      default:
         return state;
   }
}
 