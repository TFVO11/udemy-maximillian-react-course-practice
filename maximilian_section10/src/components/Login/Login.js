import React, { useState, useEffect, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.valid, isValid: action.val.includes('@') };
  };
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  };
  return { value: '', isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { 
      value: '',
      isValid: null,
  });

  useEffect(() => {

    console.log('EFFECT RUNNING!');
//clean up function
    return () => {
      console.log('EFFECT CLEAN UP!');
    };

  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('checking form nalidity!');

  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
    

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  //   //cleanup function: useEffect execute this function when next render. then cleanup fnt make it clear
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.includes('@')
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;


//we use useEffect that is operate on rerendering (button click)
//so we cancel out setFormIsValid
//add as dependencies, what  you'r using in this side effect function
//&& is operate when two things is fullfill one && another one
//in this component, useEffect is executed after [setFormIsValid, enteredEmail, enteredPassword] is changed
//setTimeout is delay function 
//clearTimeout() is clear cleanup function
//useReducer can update a state they are beloged before in App.js
//useReducer는 안에 ftn을 넣을 수 있지만 가독성을 위해 그리고 다른 component들과 상호작용할 필요가 없기 때문에 밖으로 뺀다.