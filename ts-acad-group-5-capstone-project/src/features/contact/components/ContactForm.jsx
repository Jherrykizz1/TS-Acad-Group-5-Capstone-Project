import './contact.css'
import { useContactForm } from '../hooks/useContactForm.js'

export default function ContactForm() {
  const {
    values,
    errors,
    submitting,
    submitMessage,
    submitSuccess,
    maxMessageChars,
    handleChange,
    handleSubmit,
  } = useContactForm()

  return (
    <form className="contactForm" onSubmit={handleSubmit} noValidate>
      <div className="contactGrid">
        <label className="field fieldPhone">
          <span className="label">
            Full Name<span className="req">*</span>
          </span>
          <input
            className="input"
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
          />
          {errors.fullName ? <span className="error">{errors.fullName}</span> : null}
        </label>

        <label className="field fieldMessage">
          <span className="label">
            Email<span className="req">*</span>
          </span>
          <input
            className="input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="example@example.com"
            autoComplete="email"
          />
          {errors.email ? <span className="error">{errors.email}</span> : null}
        </label>

        <label className="field">
          <span className="label">
            Phone Number<span className="req">*</span>
          </span>
          <input
            className="input"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Please enter a valid phone number."
            autoComplete="tel"
          />
          {errors.phone ? <span className="error">{errors.phone}</span> : null}
        </label>

        <label className="field">
          <span className="label">
            Message<span className="req">*</span>
          </span>
          <textarea
            className="textarea"
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Enter your message"
<<<<<<< Updated upstream
            rows={3}
=======
            rows={1}
>>>>>>> Stashed changes
          />
          <div className="charHint">{maxMessageChars} characters</div>
          {errors.message ? <span className="error">{errors.message}</span> : null}
        </label>
      </div>

      <button className="submitBtn" type="submit" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Submit'}
        <span className="submitArrow" aria-hidden="true">
          →
        </span>
      </button>

      {submitMessage ? (
        <p className={submitSuccess ? 'submitOk' : 'submitErr'} role="status">
          {submitMessage}
        </p>
      ) : null}
    </form>
  )
}

