import './AlertMessage.scss'

type AlertMessageProps = {
    message: string,
    msgType: "error" | "alert"
}


const AlertMessage = ({message,msgType} :AlertMessageProps) => {
  return (
    <div role="alert" className={`message ${msgType}`}>
        {message}
    </div>
  )
}

export default AlertMessage