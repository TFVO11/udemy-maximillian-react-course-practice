
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card.js';
import { useState } from 'react';

const ExpenseItem = (props) => {
    
    //function clickHandler() {}
//     const [title, setTitle] = useState(props.title);
//     console.log('ExpenseItem evaluated by React');
// // 이 console.log가 실제로 앱에서 4번 나온다. 그 말인 즉 Expense에 
// //들어 있는 4개의 state는 전부 따로 독립적인 state라는 말이 된다.. 
// //그런데 change Title을 누르면 하나의 state에 대해 이벤트가 이루어진다
// //그래서 console에 한번만 찍힘

//     const clickHandler = () => {
//         setTitle(props.title);
//         console.log(title);
//     };

    return (
        <Card className='expense-item'>

            <ExpenseDate date={props.date} />
            <div className='expense-item__descriptio'>
                <h1>{props.title}</h1>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
//button onClick={clickHandler}는 클릭핸들러라는 함수를 
//실행한다는 것이다. 
    );
}

export default ExpenseItem;