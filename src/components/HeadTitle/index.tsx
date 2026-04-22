
type headingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadTitlePropsType<T extends headingTags> = {
    as?: T,
    text: string,
    color?: string
}


const HeadTitle = <T extends headingTags= "h1">({as, text, color} : HeadTitlePropsType<T>) => {

  const Tag = as || "h1"
  const upperText = text.toUpperCase()

  return (
    <Tag style={{color: color}}>
        {upperText}
    </Tag>
  )
}

export default HeadTitle