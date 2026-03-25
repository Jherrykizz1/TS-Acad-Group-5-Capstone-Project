import { useMemo, useState } from 'react'
import { submitContact } from '../../../api/contactApi.js'

function validate(values) {
  const errors = {}

  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Name is required.'
  else if (name.length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!email) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email.'

  if (!message) errors.message = 'Message is required.'
  else if (message.length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}

export function useContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
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
    setValues((prev) => ({ ...prev, [name]: value }))
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
      setValues({ name: '', email: '', message: '' })
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
    handleChange,
    handleSubmit,
  }
}

