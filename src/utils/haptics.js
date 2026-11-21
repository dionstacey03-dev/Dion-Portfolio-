// Small, optional tactile feedback for supported mobile browsers.
// Unsupported devices and browsers simply ignore the request.
export function triggerHaptic(pattern = 10) {
  if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return
  try { navigator.vibrate(pattern) } catch { /* Haptics are an optional enhancement */ }
}
