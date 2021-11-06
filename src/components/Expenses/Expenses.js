import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [pickedYear, setPickedYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setPickedYear(selectedYear);
    };
    // the function returns true if the date stored in the db equals to the picked one otherwise false
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === pickedYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.length > 0 && filteredExpenses.map((item) => (<ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        /> ))
    }

    return(
        <Card className="expenses">
            <ExpensesFilter selected={pickedYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
}

export default Expenses;