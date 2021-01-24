import React from 'react'
import styled from 'styled-components'

const CurrentWeatherContainer = styled.div``

const CurrentWeather = ({current}) => {
  console.log(current)
  return (
    <CurrentWeatherContainer>
      CurrentWeather
    </CurrentWeatherContainer>
  )
}

export default CurrentWeather
