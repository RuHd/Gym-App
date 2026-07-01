import { CSSProperties } from 'react'
import './AlertMessage.scss'
import { CiCircleAlert } from "react-icons/ci";


type AlertMessageProps = {
    message: string,
    msgType: "error" | "alert",
    style?: CSSProperties
}


const AlertMessage = ({message,msgType, ...props} :AlertMessageProps) => {
  return (
    <div role="alert" className={`message ${msgType}`} style= {props.style}>
        <CiCircleAlert size={35} className='alertIcon'/>
        {message}
    </div>
  )
}

export default AlertMessage