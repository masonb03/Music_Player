import { useState } from "react";
import '../../src/Auth.css'
import logo from '../../src/assets/SonaraLogo.png'

function Auth({ setToken }){
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: ''});
    const [error, setError] = useState('');

    const handleChange = (e) =>{
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setError('');

        const endpoint = isLogin? "/api/auth/login" : "/api/auth/register";

        try{
            const res = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"},
                    body: JSON.stringify(formData),               
            });

            const data = await res.json();
            if(!res.ok) throw new Error(data.message || "Failed");

            setToken(data.token);
        }catch(err){
            setError(err.message);
        }
    };


    return(
        <div className="auth-container">
            <div className="auth-card">
                <img src={logo} alt="Sonara Logo" className="logo-login"/>
            <h2>{isLogin ? "Log In to Sornara" : "Create a Sornara Account"}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                />
                <input 
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button type="submit">{isLogin ? "Login" : "Register"}</button>
            </form>
            {error && <p className="error">{error}</p>}

            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span className="toggle" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Register" : "Login"}
                </span>
            </p>
            </div>
        </div>
    )
}

export default Auth;