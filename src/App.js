import React, {useState} from 'react'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

import '@reach/dialog/styles.css'

export default function App() {
  const [openModal, setOpenModal] = useState('none')
  const close = () => setOpenModal('none')
  const openLogin = () => setOpenModal('login')
  const openRegister = () => setOpenModal('register')

  return (
    <div>
      <Logo />

      <h1>Bookshelf</h1>

      <button onClick={openLogin}>Login</button>
      <Dialog
        aria-label="Login Form"
        isOpen={openModal === 'login'}
        onDismiss={close}
      ></Dialog>

      <button onClick={openRegister}>Register</button>
      <Dialog
        aria-label="Register Form"
        isOpen={openModal === 'register'}
        onDismiss={close}
      ></Dialog>
    </div>
  )
}
