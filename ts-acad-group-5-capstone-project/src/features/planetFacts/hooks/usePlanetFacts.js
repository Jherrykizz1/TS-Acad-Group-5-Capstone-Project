import { useMemo } from 'react'
import { usePlanets } from '../../planets/hooks/usePlanets.js'

export function usePlanetFacts() {
  const { planets, loading, error } = usePlanets()

  const factsRows = useMemo(() => {
    return planets.map((p) => ({
      id: p.id,
      planet: p.name,
      distanceFromSun: p.distanceFromSun,
    }))
  }, [planets])

  return { factsRows, loading, error }
}

