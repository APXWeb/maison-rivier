import { SKETCHES } from '../sketches.js'

export default function Sketch({ name }) {
  const def = SKETCHES[name]
  if (!def) return null
  return (
    <svg
      viewBox={def.viewBox}
      className="sketch"
      dangerouslySetInnerHTML={{ __html: def.markup }}
    />
  )
}
