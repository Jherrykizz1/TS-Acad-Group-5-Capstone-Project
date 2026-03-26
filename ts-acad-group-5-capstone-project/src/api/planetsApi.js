const DEFAULT_PLANETS_ENDPOINT = 'https://anurella.github.io/json/planets.json'

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
  const planets = normalizePlanetsResponse(json)
  return planets.map((p) => {
    // Support APIs that return relative image paths (e.g. "../images/earth.jpg")
    if (p && typeof p.image === 'string' && p.image) {
      try {
        return { ...p, image: new URL(p.image, PLANETS_ENDPOINT).toString() }
      } catch {
        return p
      }
    }
    return p
  })
}

