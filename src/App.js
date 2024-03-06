import React, {useState} from 'react'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'
import {LoginForm} from 'components/LoginForm'
import '@reach/dialog/styles.css'

export default function App() {
  const [openModal, setOpenModal] = useState('none')
  const close = () => setOpenModal('none')
  const openLogin = () => setOpenModal('login')
  const openRegister = () => setOpenModal('register')

  function handleLogin(formData) {
    console.log('login', formData)
  }

  function handleRegister(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo />

      <h1>Bookshelf</h1>

      <div>
        <button onClick={openLogin}>Login</button>
        <Dialog
          aria-label="Login Form"
          isOpen={openModal === 'login'}
          onDismiss={close}
        >
          <div>
            <button onClick={close}>Close</button>
            <h2>Login</h2>
            <LoginForm buttonText="Login" onSubmit={handleLogin} />
          </div>
        </Dialog>
      </div>

      <div>
        <button onClick={openRegister}>Register</button>
        <Dialog
          aria-label="Registration Form"
          isOpen={openModal === 'register'}
          onDismiss={close}
        >
          <div>
            <button onClick={close}>Close</button>
            <h2>Register</h2>
            <LoginForm buttonText="Register" onSubmit={handleRegister} />
          </div>
        </Dialog>
      </div>
    </div>
  )
}
