import { useCallback, useEffect, useState } from 'react'
import { fetchPlanets } from '../../../api/planetsApi.js'

function normalizePlanet(p) {
  const name = p.planet ?? p.name ?? p.planet_name ?? p.planetName ?? 'Unknown'
  const distanceFromSun =
    p.distance_from_the_sun ??
    p.distanceFromSun ??
    p.distance_from_sun ??
    p.distance ??
    ''

  const image = p.image ?? p.planet_image ?? p.planetImage ?? ''

  return {
    id: p.id ?? `${name}-${distanceFromSun}`,
    name,
    distanceFromSun,
    image,
  }
}

export function usePlanets() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadPlanets = useCallback(async (signal) => {
    setLoading(true)
    setError('')

    try {
      const raw = await fetchPlanets({ signal })
      setPlanets(raw.map(normalizePlanet))
    } catch (err) {
      if (err?.name === 'AbortError') return
      setError(err?.message || 'Failed to load planets')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    loadPlanets(controller.signal)
    return () => controller.abort()
  }, [loadPlanets])

  const refetch = useCallback(() => {
    const controller = new AbortController()
    loadPlanets(controller.signal)
  }, [loadPlanets])

  return { planets, loading, error, refetch }
}

