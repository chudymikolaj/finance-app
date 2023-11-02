import SVG from "./svgicon.styled"

const SVGimage = ({ src, ...rest }: { src: any | undefined, [x: string]: any; }) => {
  return (
    <SVG src={src as any} {...rest} />
  )
}

export default SVGimage;