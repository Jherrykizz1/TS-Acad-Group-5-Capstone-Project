import './autoplayVideo.css'

// Replace `videoSrc` with the course-provided video file URL when you have it.
const videoSrc = ''

export default function AutoplayVideo() {
  if (!videoSrc) {
    return (
      <div className="videoPlaceholder" role="note">
        Video placeholder: add the course video URL in `AutoplayVideo.jsx` to enable autoplay,
        muted looping (no iframe).
      </div>
    )
  }

  return (
    <div className="videoWrap">
      <video
        className="video"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    </div>
  )
}

