import React, { useState } from 'react';

const ControlledFrom = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setPassword(e.target.password.value)
        setEmail(e.target.email.value)
        setUsername(e.target.username.value)
        console.log(email,username,password)


    }
    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value)
        console.log(password)
        if (password.length < 6) {
            setError('Password Must be 6 character longer')
        }
        else {
            setError('')
        }
    }
    return (
        <div >

            <form onSubmit={handleSubmit} className='space-y-3' action="">
                <input name='username' placeholder='enter username' type="text" required /> <br />
                <input placeholder='Type Your Email' required type="email" name="email" />
                <br />
                <input placeholder='Type Your Password' required type="password" name="password" />

                <br />
                <input type="submit" value="Submit" />

            </form>
            <p>
                <small className='text-red-500'>
                    {error}
                </small>
            </p>

        </div>
    );
};

export default ControlledFrom;