import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';


const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };



return (
<div className = "new-expenses">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
</div>
);

};

export default NewExpense;

//여기서 매개변수가 왜 홀로 변수 안에 열거 되어있는가? 바로 매개변수는 함수 밖에서
//받아오는 값인데 이 값이 enteredtitle같은 것이다. 참고로 인자는 밖에서 매개변수로
//주는 값이다.

//여기서 ExpenseForm에 있는 expanseData가 인자로써 onSaveExpesneData에 전달
//이 되고 거기서 하위 폴더에서 상위 폴더로 역으로 값이 넘어온다.
//ExpenseForm에서 여기로 3개의 배열이 오는데 이를 합쳐서 id로 인덱스를 매겨놓고 그리고 app으로 보낸다.
//ExpenseForm(손자)에서 NewExpesne(자식)으로 데이터가 전해지고 App(부모)로 데이터가 전해지는 과정이 중요하다. 