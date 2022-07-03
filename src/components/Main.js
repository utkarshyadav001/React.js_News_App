import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { bindActionCreators } from 'redux'
import '../style/main.css'

const Main = () => {
  const disptach = useDispatch()
  // const action = bindActionCreators(actionCreators, disptach);
  const {WithdrawMoney, DepositMoney} = bindActionCreators(actionCreators, disptach);
  return (
    <div className="container">
      <h1>Deposit/Withdraw Money</h1>
      {/* <button id="Withdraw" onClick={()=>{disptach(actionCreators.WithdrawMoney(100))}} >-</button>
      <h3>Update Balance</h3>
      <button id="Deposit" onClick={()=>{disptach(actionCreators.DepositMoney(100))}} >+</button> */}
      <button id="Withdraw" onClick={()=>{WithdrawMoney(100)}} >-</button>
      <h3>Update Balance</h3>
      <button id="Deposit" onClick={()=>{DepositMoney(100)}} >+</button>
    </div>
  )
}

export default Main
