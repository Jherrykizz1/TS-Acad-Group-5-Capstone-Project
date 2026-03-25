import './planetFacts.css'

export default function PlanetFactsSection() {
  return (
    <section id="planet-facts" className="section" aria-label="Planetary Facts at a glance">
      <div className="container">
        <h2 className="sectionTitle">Planetary Facts at a Glance</h2>
        <p className="sectionLead">
          Placeholder for the table that summarizes each planet’s facts. Later we will pull the
          values from the same planet API and render them in a responsive table.
        </p>

        <div className="factsPlaceholder" role="note">
          Add your facts table here.
        </div>
      </div>
    </section>
  )
}

