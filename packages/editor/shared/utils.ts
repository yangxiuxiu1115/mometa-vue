export const inIframe = () => {
  if (window.parent) {
    return window.parent != window
  }
  return false
}
