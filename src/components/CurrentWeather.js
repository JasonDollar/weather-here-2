import React from 'react'
import styled from 'styled-components'

import MainInfo from './MainInfo'

const CurrentWeatherContainer = styled.div``

const CurrentWeather = ({current, daily}) => {
  const sunPositionTime = {
    sunrise: daily.data[0].sunriseTime,
    sunset: daily.data[0].sunsetTime,
  }
  // console.log(current)
  return (
    <CurrentWeatherContainer>
      CurrentWeather
      <MainInfo current={current} sunPositionTime={sunPositionTime}/>
    </CurrentWeatherContainer>
  )
}

export default CurrentWeather
