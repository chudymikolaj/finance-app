import SVG from "./svgicon.styled"

const SVGimage = ({ src }: { src: string | undefined }) => {
  return (
    <SVG src={src as any} />
  )
}

export default SVGimage;