import React from 'react'
import {LoginForm} from './LoginForm'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'

const props = {
  buttonText: 'Login',
  onSubmit: jest.fn(),
}

beforeEach(() => {
  props.onSubmit = jest.fn()
})

test('login form renders a username input, password input and submit button', async () => {
  render(<LoginForm {...props} />)

  screen.getByRole('textbox', {name: /username/i})
  screen.getByRole('textbox', {name: /password/i})
  screen.getByRole('button', {name: props.buttonText})
})

test('login form calls onSubmit and returns form data', async () => {
  const fakeLoginInput = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  }

  let formData
  props.onSubmit.mockImplementationOnce(data => (formData = data))

  render(<LoginForm {...props} />)

  const username = screen.getByRole('textbox', {name: /username/i})
  const password = screen.getByRole('textbox', {name: /password/i})
  const button = screen.getByRole('button', {name: props.buttonText})

  await userEvent.type(username, fakeLoginInput.username)
  await userEvent.type(password, fakeLoginInput.password)
  await userEvent.click(button)

  expect(props.onSubmit).toHaveBeenCalledTimes(1)
  expect(formData.get('username')).toEqual(fakeLoginInput.username)
  expect(formData.get('password')).toEqual(fakeLoginInput.password)
})
