import React, { useState } from "react";

import { Navigate } from "react-router-dom";

const Input = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredBirthday, setEnteredBirthday] = useState("");

  const [showNextPage, setShowNextPage] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const birthdayInputChangeHandler = (event) => {
    setEnteredBirthday(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredName || !enteredBirthday) {
      return alert("Enter");
    }

    setShowNextPage(true);
  };
  if (showNextPage) {
    return (
      <Navigate
        to='/greet'
        state={{ bday: enteredBirthday, name: enteredName }}
      />
    );
  }
  return (
    <div
      className='h-screen  flex flex-col 
                    items-center justify-center'>
      <form className='w-full max-w-lg' onSubmit={formSubmissionHandler}>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'></label>
          Enter your Name :
          <input
            type='text'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={nameInputChangeHandler}
          />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'></label>
          Enter your Birthday :
          <input
            type='date'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={birthdayInputChangeHandler}
          />
        </div>
        <button className='mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
