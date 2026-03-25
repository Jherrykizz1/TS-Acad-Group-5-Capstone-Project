import ContactForm from './ContactForm.jsx'
import './contactSection.css'

export default function ContactSection() {
  return (
    <section id="contact" className="section" aria-label="Contact us">
      <div className="container">
        <h2 className="sectionTitle">Contact us</h2>
        <p className="sectionLead">
          Send us a message using the form. Your message will be validated on the client and
          submitted via Fetch API.
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

