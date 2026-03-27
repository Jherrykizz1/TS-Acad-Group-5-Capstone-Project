import { useMemo, useState } from 'react'
import { submitContact } from '../../../api/contactApi.js'

const MAX_MESSAGE_CHARS = 100

function validate(values) {
  const errors = {}

  const fullName = values.fullName.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const message = values.message.trim()

  if (!fullName) errors.fullName = 'Full name is required.'
  else if (fullName.length < 2) errors.fullName = 'Full name must be at least 2 characters.'

  if (!email) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email.'

  if (!phone) errors.phone = 'Phone number is required.'
  else if (!/^[+\d][\d\s()-]{6,}$/.test(phone)) errors.phone = 'Please enter a valid phone number.'

  if (!message) errors.message = 'Message is required.'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.'
  else if (message.length > MAX_MESSAGE_CHARS) errors.message = `Message must be ${MAX_MESSAGE_CHARS} characters or less.`

  return errors
}

export function useContactForm() {
  const [values, setValues] = useState({ fullName: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const canSubmit = useMemo(() => {
    const errs = validate(values)
    return Object.keys(errs).length === 0
  }, [values])

  function handleChange(e) {
    const { name, value } = e.target
    if (name === 'message') {
      setValues((prev) => ({ ...prev, [name]: value.slice(0, MAX_MESSAGE_CHARS) }))
    } else {
      setValues((prev) => ({ ...prev, [name]: value }))
    }
    setSubmitSuccess(false)
    setSubmitMessage('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitMessage('')
    setSubmitSuccess(false)

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await submitContact({ ...values })
      setSubmitSuccess(true)
      setSubmitMessage('Thanks! Your message has been submitted.')
      setValues({ fullName: '', email: '', phone: '', message: '' })
      setErrors({})
    } catch (err) {
      setSubmitSuccess(false)
      setSubmitMessage(err?.message || 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return {
    values,
    errors,
    submitting,
    submitMessage,
    submitSuccess,
    canSubmit,
    maxMessageChars: MAX_MESSAGE_CHARS,
    handleChange,
    handleSubmit,
  }
}

