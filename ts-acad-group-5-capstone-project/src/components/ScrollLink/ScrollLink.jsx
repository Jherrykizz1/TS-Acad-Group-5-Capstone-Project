export default function ScrollLink({ to, className, children }) {
  function handleClick(e) {
    e.preventDefault()

    const el = document.querySelector(to)
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  )
}

