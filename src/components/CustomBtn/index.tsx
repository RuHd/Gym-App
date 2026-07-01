'use client'

import './CustomBtn.scss'

export type CustomBtnPropsType = {
    type: "submit" | "button";
    children?: React.ReactElement | React.ReactElement[] | string;
    flexDirection?: "column" | "row";
    clickEvent: () => void;
    onlyIcon?: boolean;
    style?: React.CSSProperties;
}

const CustomBtn = ({onlyIcon = false,clickEvent ,type,children, flexDirection = "row", ...props} : CustomBtnPropsType) => {

  return (
    <button type={type} className='CustomBtn' onClick={clickEvent} style={{...props.style}}>
        {children}
    </button>
  )
}
export default CustomBtn