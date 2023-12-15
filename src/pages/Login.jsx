import "../styles/Login.css"

function Login()
{
    return(
        <div className="login">
            <div className="wrapper">
             <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required/>
    
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required/>
                   
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox"/>Remember Me</label>
                    <b>Forgot Password?</b>
                </div>
                <button class="btn" type="submit">Login</button>
                <div class="register-link">
                    <label>Don't you have account? <b>Register</b></label>

                </div>
        </div>
        </div>
    )
}
export default Login;