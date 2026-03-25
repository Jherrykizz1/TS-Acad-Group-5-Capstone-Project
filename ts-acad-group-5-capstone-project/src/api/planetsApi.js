const DEFAULT_PLANETS_ENDPOINT = 'https://planets-api.vercel.app/api/v1/planets'

export const PLANETS_ENDPOINT =
  import.meta.env.VITE_PLANETS_ENDPOINT || DEFAULT_PLANETS_ENDPOINT

function normalizePlanetsResponse(json) {
  // Different APIs return different shapes; support a few common ones.
  if (Array.isArray(json)) return json
  if (Array.isArray(json?.planets)) return json.planets
  if (Array.isArray(json?.data)) return json.data
  return []
}

export async function fetchPlanets({ signal } = {}) {
  const res = await fetch(PLANETS_ENDPOINT, {
    method: 'GET',
    signal,
    headers: {
      Accept: 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch planets (${res.status})`)
  }

  const json = await res.json()
  return normalizePlanetsResponse(json)
}

