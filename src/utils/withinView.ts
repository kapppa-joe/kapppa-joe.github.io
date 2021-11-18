const withinView = (selector: string) : boolean => {
  const el = document.querySelector(selector)
  if (!el) {
    return false
  }
  const rect = el.getBoundingClientRect()
  window.innerHeight
  if (rect && rect.top) {
    return rect.top > 0 && rect.top < window.innerHeight / 2
  }
  return false
}

export default withinView