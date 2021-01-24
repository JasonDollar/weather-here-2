import React, {useContext} from 'react'
import styled from 'styled-components'

import {TextContext} from '../context/textContext'
// import Icon from '../../Icon/Icon'
// import Summary from '../../Summary/Summary'
// import { unitsNames } from '../../../data/unitsNames'

// import { formatNumber, getTimeFromSeconds } from '../../../data/utils'
// import classes from './MainInfo.module.scss'

const MainInfoStyle = styled.section`
 font-size: var(--head-font-size);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
  margin-top: 1rem;
  overflow: hidden;

  @media only screen and (min-width: 576px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  /* & svg {
    height: var(--head-font-size);
    width: var(--head-font-size);
    transform: scale(2.8) translateY(-5%);
    vertical-align: middle;
    
    fill: var(--color-text-primary);
  }   
}*/



.weather {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  @media only screen and (min-width: 420px) {
    flex-wrap: nowrap;
  }
  
  @media only screen and (min-width: 768px) {
    flex: 1 1 48%;
  }
  & .city {
    font-size: var(--head-font-size);
    letter-spacing: 1px;
    flex: 0 1 100%;
    margin: 0 1rem 0 2rem;
    text-align: center;
    @media only screen and (min-width: 420px) {
      font-size: var(--big-head-font-size);
      flex: 0 1 40%;
    }
    @media only screen and (min-width: 577px) {
      flex: 0 1 40%;
    }
  }
  & .temperature {
    flex: 0 1 25%;
    margin: 0 1rem 0 2rem;
    & span {
      font-weight: 300;
    }
  }

  & .icon {
    flex: 0 1 20%;
    text-align: center;
    transform: translateY(10%);
  }
}


.timeInfo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: var(--big-text-font-size);
  font-weight: 300;
  margin: .5rem 2rem;
  @media only screen and (min-width: 768px) {
    flex: 1 0 45%;
  }
  & .date {
    display: flex;
    margin: 0;
    margin-right: 1rem;
    font-size: calc(var(--small-head-font-size) - 2px);
    @media only screen and (max-width: 374px) {
      font-size: var(--big-text-font-size);
    }
    @media only screen and (min-width: 870px) {
      font-size: var(--head-font-size);
    }
  }
  
  & .sunContainer {
    & .sun {
      & span {
        display: inline-block;
        margin-left: .5rem;
        margin-top: 2px;
        @media only screen and (max-width: 374px) {
          font-size: calc(var(--medium-text-font-size) - 2px);
        }
      }

      & svg {
        height: var(--big-text-font-size);
        width: var(--big-text-font-size);
        transform: scale(2.5) translateY(-5%);
        fill: var(--color-text-primary);
      }

    }
  }}
`

const MainInfo = ({curent, daily, sunPositionTime}) => {
  const {text} = useContext(TextContext)
  const {current} = text
  return (
    <MainInfoStyle>
      <div className="weather">
        <div className="city">{current.location}</div>
      </div>
      <div className="temperature">
        {current.temperature}
      </div>
      <div className="timeInfo"></div>
      <div className="sunContainer">
        <div className="sun">{sunPositionTime.sunrise}</div>
        <div className="sun">{sunPositionTime.sunset}</div>
      </div>
    </MainInfoStyle>
  )
}

export default MainInfo