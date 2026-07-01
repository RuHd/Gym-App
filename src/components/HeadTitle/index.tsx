
type headingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadTitlePropsType<T extends headingTags> = {
    as?: T,
    text: string,
    color?: string,
    style?: React.CSSProperties,
    className?: string
}


const HeadTitle = <T extends headingTags>({as, text, color, className, ...props} : HeadTitlePropsType<T>) => {

  const Tag = as || "h1"
  const upperText = text.toUpperCase()

  return (
    <Tag className={className} style={{color: color, ...props.style}}>
        {upperText}
    </Tag>
  )
}

export default HeadTitle