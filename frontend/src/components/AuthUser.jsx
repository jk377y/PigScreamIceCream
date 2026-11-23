import { useState } from 'react'
import logo from '../assets/logo.png'
import Modal from './Modal.jsx'

//TODO login / sign-up UI only. Nothing is submitted, stored, or authenticated yet —
//TODO that will be wired up once the backend auth endpoints exist.
const AuthUser = ({ onClose }) => {
    const [mode, setMode] = useState('login')
    const [notice, setNotice] = useState('')

    function switchMode(newMode) {
        setMode(newMode)
        setNotice('')
    }

    function handleSubmit(event) {
        event.preventDefault()
        setNotice('Accounts are coming soon! Logging in and signing up are not available yet.')
    }

    const isLogin = mode === 'login'

    return (
        <Modal onClose={onClose} labelledBy="auth-title" className="auth-modal">
            <img src={logo} alt="" className="auth-logo" />
            <h2 id="auth-title" className="auth-title">{isLogin ? 'Welcome Back!' : 'Join the Herd!'}</h2>
            <p className="auth-subtitle">Please log in or create an account to add items to your cart.</p>

            <div className="auth-tabs" role="tablist">
                <button
                    type="button"
                    role="tab"
                    aria-selected={isLogin}
                    className={`auth-tab ${isLogin ? 'active' : ''}`}
                    onClick={() => switchMode('login')}
                >
                    Log In
                </button>
                <button
                    type="button"
                    role="tab"
                    aria-selected={!isLogin}
                    className={`auth-tab ${!isLogin ? 'active' : ''}`}
                    onClick={() => switchMode('signup')}
                >
                    Sign Up
                </button>
            </div>

            {/* key={mode} resets the form fields when switching tabs */}
            <form key={mode} className="auth-form" onSubmit={handleSubmit}>
                {!isLogin && (
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Your name" autoComplete="name" />
                    </label>
                )}
                <label>
                    Email
                    <input type="email" name="email" placeholder="you@example.com" autoComplete="email" />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        autoComplete={isLogin ? 'current-password' : 'new-password'}
                    />
                </label>
                {!isLogin && (
                    <label>
                        Confirm Password
                        <input type="password" name="confirmPassword" placeholder="••••••••" autoComplete="new-password" />
                    </label>
                )}

                <button type="submit" className="primary-btn auth-submit">
                    {isLogin ? 'Log In' : 'Create Account'}
                </button>

                {notice && <p className="auth-notice" role="status">{notice}</p>}
            </form>
        </Modal>
    )
}

export default AuthUser
