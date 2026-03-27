const DEFAULT_CONTACT_ENDPOINT = 'https://whitebricks.com/tsacademy.php'

export const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || DEFAULT_CONTACT_ENDPOINT

export async function submitContact({ fullName, email, phone, message }, { signal } = {}) {
  const form = new FormData()
  form.append('fullName', fullName)
  form.append('email', email)
  form.append('phone', phone)
  form.append('message', message)

  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    signal,
    body: form,
  })

  if (!res.ok) {
    throw new Error(`Failed to submit contact form (${res.status})`)
  }

  return true
}

