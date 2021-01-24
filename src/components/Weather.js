import React, {useState} from 'react'
import styled from 'styled-components'

import randomData from '../data/random'

import CurrentWeather from './CurrentWeather'

const WeatherContainer = styled.div`

  max-width: 1040px;
  margin: 0 auto;
  margin-bottom: 6.5rem;
  background-color: var(--color-back);
  @media only screen and (min-width: 577px) {
    margin-bottom: 2rem;
  }
`

const Weather = () => {
  const [weatherData, setWeatherData] = useState(() => randomData)

  return (
    <WeatherContainer>
      <CurrentWeather current={weatherData.currently} daily={weatherData.daily} timezone={weatherData.timezone}/>
    </WeatherContainer>
  )
}

export default Weather
