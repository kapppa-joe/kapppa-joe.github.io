import { useLayoutEffect } from "preact/hooks"

const getScrollPosition = () => {
  try {
    return { x: window.scrollX, y: window.scrollY }
  } catch (err) {
    console.error('getScrollPosition err:', err.message)
    return { x: 0, y: 0 }
  }
}


let hasScrollListener = false


const useScrollPosition = (effect, dependencies, wait: number) => {
  let waitTimeout: null | number = null;
  let prevPosition = { x: 0, y: 0 }

  const callBack = () => {
    const position = getScrollPosition()
    const direction = prevPosition.y > position.y ? 'up' : 'down'

    effect({ position, direction })
    waitTimeout = null
    prevPosition = position
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait && waitTimeout == null) {
        waitTimeout = setTimeout(callBack, wait)
      } else if (!wait) { callBack() }
    }

    let mainEl = document.querySelector("#sections-wrapper")

    try { 
      mainEl && mainEl.addEventListener('scroll', handleScroll)
      hasScrollListener = true
    } catch (err) {
      console.error('useScrollPosition err:', err.message)
    }

    return () => hasScrollListener && mainEl && mainEl.removeEventListener('scroll', handleScroll)
  }, dependencies)
}

export default useScrollPosition