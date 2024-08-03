export function hexToRGBA(hex: string, opacity = 1): string {
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) {
    return hexToRGBA("#5F666A", opacity)
  }

  const clearHex = hex.replace("#", "")

  let r: number
  let g: number
  let b: number

  if (clearHex.length === 3) {
    r = Number.parseInt(clearHex[0] + clearHex[0], 16)
    g = Number.parseInt(clearHex[1] + clearHex[1], 16)
    b = Number.parseInt(clearHex[2] + clearHex[2], 16)
  } else if (clearHex.length === 6) {
    r = Number.parseInt(clearHex.substring(0, 2), 16)
    g = Number.parseInt(clearHex.substring(2, 4), 16)
    b = Number.parseInt(clearHex.substring(4, 6), 16)
  } else {
    throw new Error("Invalid hex color length")
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
