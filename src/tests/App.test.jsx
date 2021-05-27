import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../pages/App'

test('renders welcome page', () => {
  render(<App />)
  const linkElement = screen.getByText(/ULTIMATE GAME CENTER/i)
  expect(linkElement).toBeInTheDocument()
})
