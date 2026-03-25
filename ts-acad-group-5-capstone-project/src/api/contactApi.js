const DEFAULT_CONTACT_ENDPOINT = 'https://httpbin.org/post'

export const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT || DEFAULT_CONTACT_ENDPOINT

export async function submitContact({ name, email, message }, { signal } = {}) {
  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  })

  if (!res.ok) {
    throw new Error(`Failed to submit contact form (${res.status})`)
  }

  // Some endpoints may not return JSON; try but don't fail submission flow.
  try {
    return await res.json()
  } catch {
    return null
  }
}

