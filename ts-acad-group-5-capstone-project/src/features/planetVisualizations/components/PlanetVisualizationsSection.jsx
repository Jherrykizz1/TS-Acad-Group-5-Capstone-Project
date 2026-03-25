import './planetVisualizations.css'

export default function PlanetVisualizationsSection() {
  return (
    <section
      id="planet-visualizations"
      className="section"
      aria-label="Visualizing the Differences Between Planets"
    >
      <div className="container">
        <h2 className="sectionTitle">Visualizing the Differences Between Planets</h2>
        <p className="sectionLead">
          Placeholder cards for comparing planet sizes/visual differences.
          Later we will render these from the planets API data.
        </p>

        <div className="vizPlaceholder" role="note">
          Add comparison cards here.
        </div>
      </div>
    </section>
  )
}

