import React from 'react'
import {screen, render} from '@testing-library/react'
import App from 'App'
import userEvent from '@testing-library/user-event'

test('renders the app', () => {
  render(<App />)

  screen.getByTitle('Bookshelf')
  screen.getByRole('heading', {name: /Bookshelf/i})
  screen.getByRole('button', {name: /Login/i})
  screen.getByRole('button', {name: /Register/i})
})

test('clicking login button opens login dialog', async () => {
  render(<App />)

  const button = screen.getByRole('button', {name: /Login/i})

  expect(screen.queryByRole('dialog', {name: /login/i})).toBeNull()

  await userEvent.click(button)

  screen.getByRole('dialog', {name: /login/i})
})

test('clicking register button opens register dialog', async () => {
  render(<App />)

  const button = screen.getByRole('button', {name: /Register/i})

  expect(screen.queryByRole('dialog', {name: /register/i})).toBeNull()

  await userEvent.click(button)

  screen.getByRole('dialog', {name: /register/i})
})
