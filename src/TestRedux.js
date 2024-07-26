import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../src/actions'; 
import { addExpense } from '../src/actions';

class TestRedux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // expenses: props.expenses,
            // newExpense: {
            //     id: '',
            //     description: '',
            //     amount: ''
            // }
        }
        this.props.onAddExpense({
          name: "expense1",
          amount: 1000,
          spendDate: "2020-02-03",
          category: "CITY",
        });
    }

    render()
    {
        return (
            <div>
                <h1>Test Redux</h1>
                {/* {this.props.expenses.map(expense => (
                    <div key={expense.id}>
                        <h2>{expense.description}</h2>
                        <p>{expense.amount}</p>
                        <button onClick={() => this.props.onDelete(expense.id)}>Delete</button>
                    </div>
                ))} */}
                <button onClick={() => {
                    console.log('11111', this.props.expenses);
                    // this.props.onDelete(111)
                    this.props.onAddExpense({
                        name: "expense1",
                        amount: 1000,
                        spendDate: "2020-02-03 " + (new Date().toISOString()),
                        category: "CITY",
                      });
                }}>Hay nhan vao day</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
       expenses: state
    };
 };
 const mapDispatchToProps = dispatch => {
    return {
       onAddExpense: expense => {
          dispatch(addExpense(expense));
       },
       onDelete: id => {
          dispatch(deleteExpense(id));
       }
    };
 };
 export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(TestRedux);