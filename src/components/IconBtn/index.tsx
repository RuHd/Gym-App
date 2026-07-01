import { IconType } from "react-icons";
import CustomBtn, { CustomBtnPropsType } from "../CustomBtn"
import './IconBtn.scss'

type IconBtnPropsType = CustomBtnPropsType & {
    Icon: IconType;
    HideIcon?: boolean;
    text?: string;
    gap?: string;
    size?: number;
}

const IconBtn = ({Icon,text, gap = "10px", HideIcon = false, ...props } : IconBtnPropsType) => {
  const style = {
    gap: gap
  }
  return (
    <CustomBtn type={props.type} clickEvent={props.clickEvent} style={style}>
        <Icon style={{opacity: HideIcon ? 0 : 1}} size={props.size}/>
    </CustomBtn>
  )
}

export default IconBtn