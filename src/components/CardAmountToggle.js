import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CardAmountToggle = ({amount, setDecrease, setIncrease}) => {
  return (
    <>
        <div className="cardid-btn">
            <button onClick={() => setDecrease()}><FaMinus /></button>
            <div className="a-print">{amount}</div>
            <button onClick={() => setIncrease()}><FaPlus /></button>
        </div>
    </>
  )
}

export default CardAmountToggle
