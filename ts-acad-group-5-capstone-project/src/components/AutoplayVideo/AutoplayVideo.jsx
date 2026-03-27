import { useMemo, useState } from 'react'
import './autoplayVideo.css'

const FALLBACK_SOURCES = [
  '/videos/space.mp4',
  'https://www.pexels.com/download/video/4980005/',
  'https://www.pexels.com/download/video/1851190/',
  'https://www.pexels.com/download/video/9385711/',
]

export default function AutoplayVideo({ className = '', sources = FALLBACK_SOURCES }) {
  const srcList = useMemo(() => (Array.isArray(sources) && sources.length ? sources : FALLBACK_SOURCES), [sources])
  const [idx, setIdx] = useState(0)

  const src = srcList[idx]

  return (
    <div className={`videoWrap ${className}`.trim()}>
      <video
        className="video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls
        onError={() => setIdx((i) => (i + 1 < srcList.length ? i + 1 : i))}
      />
    </div>
  )
}

