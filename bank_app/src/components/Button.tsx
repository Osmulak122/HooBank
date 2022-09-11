import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium rounded-[10px] text-[18px] transition ease-in-out delay-50 hover:scale-110 text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button
