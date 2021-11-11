export const renderSVG = (svgString) => {
  return new DOMParser().parseFromString(svgString, 'application/xml')
}
