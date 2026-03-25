import './contact.css'
import { useContactForm } from '../hooks/useContactForm.js'

export default function ContactForm() {
  const {
    values,
    errors,
    submitting,
    submitMessage,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <label className="field">
        <span className="label">Name</span>
        <input
          className="input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          autoComplete="name"
        />
        {errors.name ? <span className="error">{errors.name}</span> : null}
      </label>

      <label className="field">
        <span className="label">Email</span>
        <input
          className="input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
        />
        {errors.email ? <span className="error">{errors.email}</span> : null}
      </label>

      <label className="field">
        <span className="label">Message</span>
        <textarea
          className="textarea"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
        />
        {errors.message ? <span className="error">{errors.message}</span> : null}
      </label>

      <button className="btn btnPrimary contactSubmit" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>

      {submitMessage ? (
        <p className={submitSuccess ? 'submitOk' : 'submitErr'} role="status">
          {submitMessage}
        </p>
      ) : null}
    </form>
  )
}

