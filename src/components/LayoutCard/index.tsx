import './LayoutCard.scss'

interface LayoutCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;

}


const LayoutCard = (props: LayoutCardProps) => {
  return (
    <div className={`Layout-card ${props.className || ''}`} style={props.style}>
        {props.children}
    </div>
  )
}

export default LayoutCard