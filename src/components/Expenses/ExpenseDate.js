import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', { month: 'long' })
    const day = props.date.toLocaleString('en-us', { day: '2-digit' })
    const year = props.date.getFullYear()
    // Link for toLocaleString
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString


    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExpenseDate