import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'

const PaystackIntegration = () => {

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const paywithpaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: "pk_test_9f81f9192c394be47fe448a728b87361cddc1255",
      amount: amount * 100,
      email,
      firstname,
      lastname,
      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        setEmail("")
        setAmount("")
      },
      onCancel(){
        alert("You have canceled the transaction")
      }
    })
  }
  
    return (
    <div className='w3-container w3-row'>
      <div className='w3-container w3-blue'>
        <h3 className='w3-center'>Make payment</h3>
      </div>
      <div className='w3-container w3-quarter'></div>
      <div className='w3-container w3-half'>
      <div className='w3-container w3-card-4'>
      <form id='paymentForm' className=''>
        <div className='form-group'>
          <label htmlFor="email">Email Address</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='w3-input' id='email-address' />
        </div>
        <div className='form-group'>
          <label htmlFor="amount">Amount</label>
          <input type="tel" className='w3-input' value={amount} onChange={(e) => setAmount(e.target.value)} id='amount' />
        </div>
        <div className='form-group'>
          <label htmlFor="first-name">First Name</label>
          <input type="text" className='w3-input' value={firstname} onChange={(e) => setFirstname(e.target.value)} id='first-name' />
        </div>
        <div className='form-group'>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" className='w3-input' value={lastname} onChange={(e) => setLastname(e.target.value)} id='last-name' />
        </div>
        <div className='form-submit'>
          <button className='w3-btn w3-block w3-blue' type='submit'
          onClick={paywithpaystack}>Pay</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default PaystackIntegration
