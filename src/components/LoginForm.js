import React from 'react'

import styles from './LoginForm.module.css'

export function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    onSubmit(formData)
  }

  return (
    <form className={styles.form} name="Login Form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="text" />

      <button type="submit">{buttonText}</button>
    </form>
  )
}
