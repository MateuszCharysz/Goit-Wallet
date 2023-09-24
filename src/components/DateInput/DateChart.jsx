import { useState } from 'react';
import css from './DateChart.module.css';

const DateChartInput = ({ onChange }) => {
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleMonthChange = (event) => {
        const selectedMonth = event.target.value;
        setSelectedMonth(selectedMonth);
        onChange(selectedMonth, selectedYear);
    }

    const handleYearChange = (event) => {
        const selectedYear = event.target.value;
        setSelectedYear(selectedYear);
        onChange(selectedMonth, selectedYear);
    }

    return (
        <form className={css.inputDate}>
            <label>
                <select className={css.inputMonthYear} name="month" onChange={handleMonthChange}>
                    <option value="" disabled>
                    </option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                </label>
                <label>
                    <select className={css.inputMonthYear} name="year" onChange={handleYearChange}>
                    <option value="" disabled>
                    </option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    </select>
                </label>
            </form>
    )
}

export default DateChartInput