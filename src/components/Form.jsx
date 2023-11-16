import React from 'react';
import Input from './Input';

const Form = () => {
  const submitFn = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
  }
  return (
    <form onSubmit={submitFn} style={{display: "flex", alignItems: "center", flexDirection: "column",gap: "20px"}}>
      <h1>Welcome to our first app</h1>
      <Input label="Email Adress" type="email" description="We'll nevre share your email with anyone else."/>
      <Input label="Password" type="password"/>
      <div>
        <input type='checkbox' id='checkbox'/>
        <label htmlFor='checkbox' style={{cursor: "pointer", marginLeft: "5px"}}>Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary" style={{width: "100px"}}>Submit</button>
    </form>
  )
}

export default Form