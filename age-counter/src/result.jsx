function Result({ age }) {
    return (
        <div className="result">

            <h1>
                <span>{age.years}</span> years
            </h1>

            <h1>
                <span>{age.months}</span> months
            </h1>

            <h1>
                <span>{age.days}</span> days
            </h1>

        </div>
    );
}

export default Result;