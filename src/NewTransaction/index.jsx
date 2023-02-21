import React, { useState } from "react";

export const NewTransaction = ({name,setName,expense,setExpense, income,setIncome,transaction,setTransaction}) =>{

    const [amount,setAmount] = useState('')
    const handleNameClick = (e)=>{
        setName(e.target.value)
    }
    const handleAmountClick = (e)=>{
        setAmount(e.target.value)
    }

    const addTransaction = () => {
        if(amount[0]==='-') setExpense(amount)
        else setIncome(amount)
        const latestTransaction = {
            name:name,
            amount:amount
        }
        setTransaction([...transaction,latestTransaction])
    }

    return (
        <div>
            <p>Text</p>
            <input onChange={handleNameClick} type="text" />
            <p>Amount</p>
            <input onChange={handleAmountClick} type="text" />
            <button onClick={addTransaction}>Add Transaction</button>
        </div>
    )
}
