import React, {useState} from 'react';
import './App.css';
import { IncomeDisplay } from './IncomeDisplay';
import { History } from './History';
import { NewTransaction } from './NewTransaction';

function App() {

  const [name,setName] = useState('')
  const [income,setIncome] = useState('')
  const [expense,setExpense] = useState('')
  const [transaction,setTransaction] = useState([{}])

  return (
   <div>
    <IncomeDisplay income = {income} expense = {expense}/>
    <History transaction = {transaction}/>
    <NewTransaction name = {name} setName = {setName} income = {income} setIncome = {setIncome} expense = {expense} setExpense = {setExpense} transaction = {transaction} setTransaction = {setTransaction}/>
   </div>
  );
}

export default App;
