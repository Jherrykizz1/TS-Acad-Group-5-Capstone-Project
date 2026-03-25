import { useMemo } from 'react'
import { usePlanets } from '../../planets/hooks/usePlanets.js'

// Placeholder: later we will transform API planet data into comparison cards.
export function usePlanetVisualizations() {
  const { planets, loading, error } = usePlanets()

  const cards = useMemo(() => {
    return planets.slice(0, 9).map((p) => ({
      id: p.id,
      title: p.name,
      image: p.image,
    }))
  }, [planets])

  return { cards, loading, error }
}

