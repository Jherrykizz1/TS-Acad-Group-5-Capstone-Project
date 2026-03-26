import ContactForm from './ContactForm.jsx'
import './contactSection.css'

export default function ContactSection() {
  return (
    <section id="contact" className="contactMockSection" aria-label="Have Questions About Planetary Science?">
      <div className="contactMockInner">
        <h2 className="contactMockTitle">Have Questions About Planetary Science?</h2>
        <p className="contactMockLead">
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
          <br />
          Reach out and we’ll get back to you.
        </p>

        <ContactForm />
      </div>
    </section>
  )
}

