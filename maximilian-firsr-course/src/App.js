import React, { useState } from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem.js';
import Expense from './components/Expenses/Expense.js';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  { 
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: 'e2', title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  { 
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { 
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  
  
  // const addExpenseHandler = expense => {
  //   setExpenses([expense, ...expenses]);
  // }; >> 최근 데이터 갱신에 의존하는 state

  const addExpenseHandler = expense => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses]
    });
  }; // >> 나중 데이터 갱신에 의존하는 state

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
};
//이미 상위, 하위 파일로 연결되어있는데 굳이 lifting을 할 이유가 있는가?>
//하위 파일에서 이벤트로 인해 발생한 데이터를 부모 컴포넌트로 보내 줘야할 때를 보여주고 잇다

export default App;