import { useMemo } from 'react'
import { usePlanets } from '../../planets/hooks/usePlanets.js'

// Later we will map the raw planet objects into a table-friendly structure.
export function usePlanetFacts() {
  const { planets, loading, error } = usePlanets()

  const factsRows = useMemo(() => {
    // Placeholder mapping.
    return planets.map((p) => ({
      id: p.id,
      planet: p.name,
      distanceFromSun: p.distanceFromSun,
    }))
  }, [planets])

  return { factsRows, loading, error }
}

