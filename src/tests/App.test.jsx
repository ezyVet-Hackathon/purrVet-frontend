import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../pages/App'

test('renders welcome page', () => {
  render(<App />)
  const linkElement = screen.getByText(/Find a vet/i)
  expect(linkElement).toBeInTheDocument()
})
