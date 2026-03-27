import { usePlanets } from '../hooks/usePlanets.js'
import PlanetFigure from './PlanetFigure.jsx'

export default function PlanetsSection() {
  const { planets, loading, error } = usePlanets()

  return (
    <section id="planets" className="planetsSection" aria-label="Visualizing the Differences Between Planets">
      <div className="container">
        <h2 className="planetsTitle">Visualizing the Differences Between Planets</h2>
        <p className="planetsSubtitle">
          Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how
          vastly different terrestrial planets are from gas giants and ice giants.
        </p>

        {loading ? <p>Loading planets...</p> : null}
        {error ? <p role="alert">Error: {error}</p> : null}

        {!loading && !error ? (
          <div className="planetsGrid">
            {planets.slice(0, 9).map((planet) => (
              <PlanetFigure key={planet.id} planet={planet} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

