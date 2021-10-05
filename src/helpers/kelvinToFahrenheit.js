function kelvinToFahrenheit(kelvin) {
  return `${Math.round((kelvin - 273.15) * 1.8) + 32}° F`;
}

export default kelvinToFahrenheit;