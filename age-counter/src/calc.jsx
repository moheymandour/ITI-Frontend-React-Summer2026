import { useState } from "react";
import Result from "./result";

function Calc() {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const [errors, setErrors] = useState({
        day: "",
        month: "",
        year: ""
    });

    const [age, setAge] = useState({
        years: "--",
        months: "--",
        days: "--"
    });

    function calculateAge(e) {
        e.preventDefault();

        const newErrors = {
            day: "",
            month: "",
            year: ""
        };

        const d = Number(day);
        const m = Number(month);
        const y = Number(year);

        const today = new Date();


        if (!day) {
            newErrors.day = "Required";
        } else if (d < 1 || d > 31) {
            newErrors.day = "Must be a valid day";
        }


        if (!month) {
            newErrors.month = "Required";
        } else if (m < 1 || m > 12) {
            newErrors.month = "Must be a valid month";
        }


        if (!year) {
            newErrors.year = "Required";
        } else if (y > today.getFullYear()) {
            newErrors.year = "Must be in the past";
        }


        if (newErrors.day || newErrors.month || newErrors.year) {
            setErrors(newErrors);
            return;
        }


        const birthDate = new Date(y, m - 1, d);


        if (
            birthDate.getFullYear() !== y ||
            birthDate.getMonth() !== m - 1 ||
            birthDate.getDate() !== d
        ) {
            newErrors.day = "Invalid date";
            setErrors(newErrors);
            return;
        }


        setErrors(newErrors);

        let years = today.getFullYear() - y;
        let months = today.getMonth() - (m - 1);
        let days = today.getDate() - d;

        if (days < 0) {
            months--;

            days += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({
            years,
            months,
            days
        });
    }

    return (
        <div className="calculator">

            <form onSubmit={calculateAge}>

                <div className="inputs">

                    <div className="input-group">
                        <label>DAY</label>

                        <input
                            type="number"
                            placeholder="DD"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        />

                        {errors.day && (
                            <p className="error">{errors.day}</p>
                        )}
                    </div>


                    <div className="input-group">
                        <label>MONTH</label>

                        <input
                            type="number"
                            placeholder="MM"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />

                        {errors.month && (
                            <p className="error">{errors.month}</p>
                        )}
                    </div>


                    <div className="input-group">
                        <label>YEAR</label>

                        <input
                            type="number"
                            placeholder="YYYY"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />

                        {errors.year && (
                            <p className="error">{errors.year}</p>
                        )}
                    </div>

                </div>

                <button type="submit" className="submit-btn">
                    <img src="./icon-arrow.svg" alt="" />
                </button>

            </form>

            <Result age={age} />

        </div>
    );
}

export default Calc;