import React from "react";

export const IncomeDisplay = ({income,expense}) => {
    return (
        <div>
            <h1>Total:{Number(income)+Number(expense)}</h1>
            <h3>income:{income}</h3>
            <h3>expense:{expense}</h3>
        </div>
    )
}