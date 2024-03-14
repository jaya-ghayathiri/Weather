import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login(){
    

    const handleSumbit=(e)=>{
        e.preventDefault()
        window.location.href="/weather"
    }
    return(
        <><form onSubmit={handleSumbit}>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input type="email" placeholder='Enter email' autoComplete='off' name="email" className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder='Enter password' autoComplete='off' name="email" className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
                <a href='/weather'><button type="submit"className='btn btn-success w-100 rounded-0'>Login</button></a>
            </div>
            </form>
            </>
    )
}
export default Login;