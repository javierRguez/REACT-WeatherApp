import React from 'react'
import { action } from '@storybook/addon-actions'
import CityList from './CityList'

export default {
  title: 'CityList',
  component: CityList,
}

const cities = [
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Bogotá', country: 'Colombia' },
  { city: 'Madrid', country: 'España' },
  { city: 'Ciudad de México', country: 'México' },
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action('Click en city')} />
