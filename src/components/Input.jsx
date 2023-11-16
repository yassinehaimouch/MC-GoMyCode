import React from 'react'

// const props = {
//   label:"Password",
//   type:"password"
// }

const Input = (props) => {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", gap: "10px"}}>
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} id={props.label} style={{width: "450px", padding: "10px 20px 10px 20px"}}/>
      {props.description && <p style={{color: "#808080"}}>{props.description}</p>}
    </div>
  )
}

export default Input