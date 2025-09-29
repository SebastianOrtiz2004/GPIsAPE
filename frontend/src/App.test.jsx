import { render, screen } from '@testing-library/react'
import App from './App'

test('muestra el título', () => {
  render(<App />)
  expect(screen.getByText('Vite + React')).toBeInTheDocument()
})
