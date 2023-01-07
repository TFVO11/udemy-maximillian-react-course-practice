import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enterTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount]= useState('');
    const [enterDate, setEnteredDate]= useState('');
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
       // setUserInput({
        //    ...userInput,
        //    enterTitle: event.target.value
        //});

        //나중에 이전 state가 현재 state에 영향을 주는 것이라면 밑에 방식으로 하라
        // setUserInput((prevState) => {
        //     return ({
        //         ...prevState, enteredTitle: event.target.value
        //     });
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enterAmount: event.target.value
    //     });
    };
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enterDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        //submitHandler안의 오브젝트들은 우선순위에 맞게 위에서 아래로 정렬했다.
    };
//onSubmit이 왜 필요한가?
//input태그에서 발생하는 submit이벤트를 처리할 수 있다...
//preventDefault is built into javascript
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enterAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enterDate} onChange={DateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>cancel</button>
                    <button type="submit" >Add Expense</button>
                </div>
            </div>
        </form>
    );
};
// onChange 이벤트는 사용자의 입력이 어떤 식으로든 변경될 때 발생합니다
//input 태그안의 value는 초깃값을 의미하는데 이를 enter시리즈에 바인딩을 하면
//이벤트가 일어날 때 입력한 값이 먼저 set시리지에 저장이 되고 제출된 그 값이 onSubmit 함수를 통해 expenseDate에 저장이 된다.
//하지만 그 값이 화면상에 그대로 노출되어있는데 이 값을 초기화해주기 위해 value에 default값을 넣어주어서 마무리했다.
export default ExpenseForm;

//<input> 태그에서 onChange 속 달라지는 state가 인자로 전달이 되고 그 인자의 값이 연산을 처리한다, 그래서 값들이 꼬여서 들어갈 일이 없다.