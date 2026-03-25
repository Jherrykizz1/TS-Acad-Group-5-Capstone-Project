import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import AutoplayVideo from '../components/AutoplayVideo/AutoplayVideo.jsx'
import ScrollLink from '../components/ScrollLink/ScrollLink.jsx'
import PlanetsSection from '../features/planets/components/PlanetsSection.jsx'
import ContactSection from '../features/contact/components/ContactSection.jsx'

import heroImg from '../assets/hero.png'
import './homePage.css'

export default function HomePage() {
  return (
    <div>
      <Header />

      <main>
        <section className="hero section">
          <div className="container heroGrid">
            <div className="heroText">
              <p className="pill">Discover planets</p>
              <h1 className="heroTitle">Explore the solar system like never before</h1>
              <p className="heroSubtitle">
                Scroll to the planet section to view names, distances, and images fetched from the API.
              </p>

              <div className="heroActions">
                <ScrollLink to="#planets" className="btn btnPrimary">
                  Explore the Data
                </ScrollLink>
                <ScrollLink to="#contact" className="btn btnGhost">
                  Contact us
                </ScrollLink>
              </div>
            </div>

            <div className="heroMedia" aria-hidden="true">
              <img className="heroImage" src={heroImg} alt="" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="sectionTitle">A quick look</h2>
            <p className="sectionLead">
              Video should autoplay, be muted, and loop (no iframe). If you have a course-provided video,
              replace the placeholder `videoSrc` in `AutoplayVideo`.
            </p>
            <AutoplayVideo />
          </div>
        </section>

        <PlanetsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

