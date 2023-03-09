import ExpenseItem from "./ExpenseItem";
import Card from "../card/Card";
import "../../css/Expenses.css";

function Expenses(props) {
    console.log(props);
  return (
    <Card className="expenses">
    <ExpenseItem
      title={props.items[0].title}
      date={props.items[0].date}
      amount={props.items[0].amount}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    ></ExpenseItem>
  </Card>
    );
}

export default Expenses;