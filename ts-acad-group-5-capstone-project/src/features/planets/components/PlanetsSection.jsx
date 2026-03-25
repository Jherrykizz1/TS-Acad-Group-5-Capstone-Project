import { usePlanets } from '../hooks/usePlanets.js'
import PlanetFigure from './PlanetFigure.jsx'

export default function PlanetsSection() {
  const { planets, loading, error } = usePlanets()

  return (
    <section id="planets" className="section" aria-label="Planets">
      <div className="container">
        <h2 className="sectionTitle">Planets</h2>
        <p className="sectionLead">
          Planet name, distance from the sun, and image are fetched dynamically from the API.
        </p>

        {loading ? <p>Loading planets...</p> : null}
        {error ? <p role="alert">Error: {error}</p> : null}

        {!loading && !error ? (
          <div className="planetsGrid">
            {planets.map((planet) => (
              <PlanetFigure key={planet.id} planet={planet} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

