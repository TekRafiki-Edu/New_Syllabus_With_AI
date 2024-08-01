import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call your API endpoint to send the reset password link
            const response = await fetch('/api/password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (data.success) {
                setMessage('Password reset link has been sent to your email.');
            } else {
                setMessage('Error sending password reset link.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default ForgotPassword;
