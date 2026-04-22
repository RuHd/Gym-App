import './CustomBtn.scss'

export type CustomBtnPropsType = {
    type: "submit" | "button";
    children?: React.ReactElement | React.ReactElement[];
    text: string;
    flexDirection?: "column" | "row";
    clickEvent: () => void;
    style?: React.CSSProperties;
}

const CustomBtn = ({clickEvent = () => console.log("clicked"),type,children, text, flexDirection = "row", ...props} : CustomBtnPropsType) => {
  const style = {
    flexDirection: flexDirection,
    ...props.style
  }

  return (
    <button type={type} className='CustomBtn' onClick={clickEvent} style={{...props.style,flexDirection: flexDirection}}>
        {children}
        <span>{text}</span>
    </button>
  )
}

export default CustomBtn