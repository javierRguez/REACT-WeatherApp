import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'
import '@testing-library/jest-dom/extend-expect'

// TDD
test('Weather render sunny', async () => {
  // AAA Arrange Act Assert
  const { findByRole } = render(<Weather temperature={10} state="clear" />)

  const temp = await findByRole('heading')

  expect(temp).toHaveTextContent('10')
})
