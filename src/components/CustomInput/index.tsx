'use client';

import { SetStateAction, useState } from 'react';
import './CustomInput.scss';

interface CustomInputProps {
    value?: string,
    name: string,
    placeholder?: string,
    type?: "text" | "number",
    style?: React.CSSProperties
}


const CustomInput = ({type = "text",...props}: CustomInputProps) => {
  const [inputValue, setinputValue] = useState(props.value ? props.value : "")
  return (
    <input name={props.name} 
          className='CustomInput' 
          type={type} 
          value={inputValue} 
          style={props.style} 
          placeholder={props.placeholder}  
    />
  )
}

export default CustomInput