import { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseDate)=>{
        const expenseData = {
            ...enteredExpenseDate,
            id:Math.random().toString
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const showExpenseForm = ()=>{
        setIsEditing(true);
    };

    const stopEditingForm = ()=>{
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={showExpenseForm}>Add Your Expenses</button>}
            {isEditing && <ExpenseForm cancelForm={stopEditingForm} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;