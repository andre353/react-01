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

    return(
        <Card className="expenses">
            <ExpensesFilter selected={pickedYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.length === 0 ? <p>No expenses found</p> : 
            filteredExpenses.map((item) => (<ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            /> ))}
        </Card>
    );
}

export default Expenses;