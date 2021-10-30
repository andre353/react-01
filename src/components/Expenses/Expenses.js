import React, {useState} from "react";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [pickedYear, setPickedYear] = useState('2021');


    const filterChangeHandler = (selectedYear) => {
        setPickedYear(selectedYear);
        console.log(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter selected={pickedYear} onChangeFilter={filterChangeHandler} />
            {props.items.map((expense) => (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            /> ))}
        </Card>
    );
}

export default Expenses;