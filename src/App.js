import styled from 'styled-components'
import GlobalStyles from './globalStyles'

import {TextProvider} from './context/textContext'

import Weather from './components/Weather'



function App() {
  return (
    <TextProvider>
      <div>
        <GlobalStyles />
        <Weather />
      </div>

    </TextProvider>
  )
}

export default App
 