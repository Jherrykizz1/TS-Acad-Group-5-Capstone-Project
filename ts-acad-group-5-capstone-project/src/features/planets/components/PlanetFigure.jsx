import { useMemo, useState } from 'react'
import planetFallback from '../../../assets/Images/planet.png'
import './planets.css'

export default function PlanetFigure({ planet }) {
  const { name, distanceFromSun, image } = planet

  const [imgOk, setImgOk] = useState(true)

  const distanceText =
    typeof distanceFromSun === 'number' || /^\d+(\.\d+)?$/.test(String(distanceFromSun))
      ? `${distanceFromSun} million km`
      : distanceFromSun

  const src = useMemo(() => {
    if (image && imgOk) return image
    return planetFallback
  }, [image, imgOk])

  return (
    <figure className="planetCard">
      <img className="planetImage" src={src} alt={name} onError={() => setImgOk(false)} loading="lazy" />
      <figcaption className="planetCaption">
        <div className="planetName">{name}</div>
        <div className="planetDistanceLabel">Distance from Sun</div>
        <div className="planetDistanceValue">{distanceText}</div>
      </figcaption>
    </figure>
  )
}

