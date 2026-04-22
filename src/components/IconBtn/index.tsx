import { IconType } from "react-icons";
import CustomBtn, { CustomBtnPropsType } from "../CustomBtn"
import './IconBtn.scss'

type IconBtnPropsType = CustomBtnPropsType & {
    Icon: IconType;
    text?: string;
    gap?: string
}

const IconBtn = ({Icon,text, gap = "10px", ...props } : IconBtnPropsType) => {
  const style = {
    gap: gap
  }
  return (
    <CustomBtn type={props.type} text={text} clickEvent={props.clickEvent} style={style}>
        <Icon/>
    </CustomBtn>
  )
}

export default IconBtn