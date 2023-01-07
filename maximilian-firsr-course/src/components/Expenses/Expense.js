import './Expense.css';
import Card from '../UI/Card.js';
import ExpenseFilter from '../ExpenseFilter/ExpensesFilter.js';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList.js';

const Expense = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
                />
                <ExpensesList items = {filterExpenses}/>
                


                
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />  */}
            </Card>
        </div>
        //부모components에 값을 전달하기 위해서 props를 쓴다.
    );
};

export default Expense;


//map이 있기 때문에 UI에서 발생한 데이터가 로직을 거쳐 만들어 질 수 있다. 이전의 하드코딩이었으면 
//배열 안의 인덱스로 밖에 안나오는 것이다.
//일반적인 경우의 데이터 이동 경로이다. App(부모)에서 Expense(자식)으로 이동.

//key에 id가 들어가기 때문에 식별이 되므로 원래 expenseitem에 전부 다시 전개가 안되고 추가한 하나의 아이템만 추가가 된다.