import React from 'react'
const Cart = (props) => {
  return (
    <>
    <div className="card">
				<h2>{props.title}</h2>
				{/* <div className="line" style={{backgroundColor:props.bgc}}></div> */}
				<p>{props.content}</p>
                </div>
    </>
  )
}

export default Cart