import Footer from '../components/Footer/Footer.jsx'
import AutoplayVideo from '../components/AutoplayVideo/AutoplayVideo.jsx'
import ScrollLink from '../components/ScrollLink/ScrollLink.jsx'
import PlanetsSection from '../features/planets/components/PlanetsSection.jsx'
import PlanetFactsSection from '../features/planetFacts/components/PlanetFactsSection.jsx'
import ContactSection from '../features/contact/components/ContactSection.jsx'

import logoImg from '../assets/Images/graphics.png'
import planetImg from '../assets/Images/planet.png'
import './homePage.css'

export default function HomePage() {
  return (
    <div className="mockPageBg">
      <main>
        {/* SECTION 1 */}
        <section className="heroMockSection" aria-label="Explore Our Solar System Through Data">
          <div className="heroMockFrame">
            <div className="heroMockTop">
              <img className="heroMockLogo" src={logoImg} alt="PlanetXplore logo" />
            </div>

            <div className="heroMockBody">
              <div className="heroMockText">
                <h1 className="heroMockHeading">
                  Explore Our Solar <br />
                  System Through Data
                </h1>
                <p className="heroMockSubtitle">
                  Understand the planets not just by name, but by measurable facts. From size and mass
                  to gravity and density, this page breaks down the solar system in a clear, data-driven way.
                </p>

                <div className="heroMockActions">
                  <ScrollLink to="#planets" className="heroBtn heroBtnPrimary">
                    Explore the Data
                  </ScrollLink>
                  <ScrollLink to="#contact" className="heroBtn heroBtnOutline">
                    Contact Us
                  </ScrollLink>
                </div>
              </div>

              <div className="heroMockPlanet" aria-hidden="true">
                <img className="heroMockPlanetImg" src={planetImg} alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="videoMockSection" aria-label="How Planetary Data Helps Us Understand Space">
          <div className="videoMockInner">
            <div className="videoMockGrid">
              <div className="videoMockCard" aria-hidden="true">
                <AutoplayVideo />
              </div>

              <div className="videoMockText">
                <h2 className="videoMockHeading">
                  How Planetary Data Helps Us <br />
                  Understand Space
                </h2>
                <p className="videoMockParagraph">
                  Planetary science goes beyond images. Comparing mass,{' '}
                  <span className="videoMockEm">diameter</span>, <span className="videoMockEm">gravity</span>, and{' '}
                  <span className="videoMockEm">density</span>, we gain insight into how planets form, behave,
                  and interact within the solar system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PlanetsSection />
        <PlanetFactsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

