import React from 'react'

const Button = ({name, mode}) => {
  return (
    <button className={`${mode == 'dark'? `bg-[#212121] text-white hover:bg-[#313131]`: `bg-white text-[#212121] hover:bg-slate-100`} px-4 py-2 rounded flex transition-colors`}>{name}</button>
  )
}

export default Button
