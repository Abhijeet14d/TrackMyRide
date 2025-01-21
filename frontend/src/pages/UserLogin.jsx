import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const loginUser = {
      email: email,
      password: password
    }
    try{
      const response = await axios.post("http://localhost:3000/users/login", loginUser);
      if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      }
    }catch(error){
      console.log(error);
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen bg-red-500 flex justify-between flex-col">
      <div>
        <img className="w-20 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What&apos;s Your Email</h3>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com" 
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
          <h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            placeholder="Password" 
            required
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            />
          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >Login</button>
        </form>
          <p className="text-center">New here? <Link
            className="text-white"
            to="/signup"
          >Create new Account</Link></p>
      </div>
      <div>
        <Link
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          to='/captain-login'
        >Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin