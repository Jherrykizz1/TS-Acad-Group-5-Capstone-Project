import './planetFacts.css'

export default function PlanetFactsSection() {
  return (
    <section id="planet-facts" className="factsSection" aria-label="Planetary Facts at a glance">
      <div className="factsInner">
        <h2 className="factsTitle">Planetary Facts at a Glance</h2>
        <p className="factsLead">
          Below is a comparative table of major planets in our solar system. The data highlights key physical
          properties used by astronomers and researchers worldwide.
        </p>

        <p className="factsCaption">
          <strong>Data about the planets of our solar system</strong> (Planetary facts taken from NASA)
        </p>

        <div className="factsTableWrap" role="region" aria-label="Planetary facts table">
          <table className="factsTable">
            <thead>
              <tr>
                <th className="factsHeadBlank" colSpan={2} />
                <th>Name</th>
                <th>Mass (10^24kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m3)</th>
                <th>Gravity (m/s2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="factsGroup" colSpan={2} rowSpan={4}>
                  Terrestrial Planets
                </td>
                <td>Mercury</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Venus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Earth</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Mars</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td className="factsGroup" rowSpan={4}>Jovian<br />Planets</td>
                <td className="factsSubGroup" rowSpan={2}>Gas Giants</td>
                <td>Jupiter</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Saturn</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td className="factsSubGroup" rowSpan={2}>Ice Giants</td>
                <td>Uranus</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
              <tr>
                <td>Neptune</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>

              <tr>
                <td className="factsGroup" colSpan={2}>Dwarf Planets</td>
                <td>Pluto</td>
                <td>0.330</td>
                <td>4,878</td>
                <td>5427</td>
                <td>3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

