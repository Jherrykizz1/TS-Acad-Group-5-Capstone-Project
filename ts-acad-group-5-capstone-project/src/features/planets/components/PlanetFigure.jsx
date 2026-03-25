import './planets.css'

export default function PlanetFigure({ planet }) {
  const { name, distanceFromSun, image } = planet

  return (
    <figure className="planetCard">
      {image ? <img className="planetImage" src={image} alt={name} /> : <div className="planetImageFallback" />}
      <figcaption className="planetCaption">
        <div className="planetName">{name}</div>
        <div className="planetDistance">
          Distance from the sun: <span className="planetValue">{distanceFromSun}</span>
        </div>
      </figcaption>
    </figure>
  )
}

