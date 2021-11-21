import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppFrame from './AppFrame'

export default {
  title: 'AppFrame',
  component: AppFrame,
}

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium voluptate corrupti nulla aut suscipit accusantium. Veritatis
      alias expedita sed, cumque dolore sequi omnis, exercitationem nostrum ducimus magnam doloremque nihil!
    </AppFrame>
  </Router>
)
