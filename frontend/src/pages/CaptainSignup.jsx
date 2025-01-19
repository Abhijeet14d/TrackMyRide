import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    })
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="py-5 px-5 h-screen bg-red-500 flex justify-between flex-col">
      <div>
        <img className="w-20 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-base font-medium mb-2">Name</h3>
          <div className='flex gap-4 mb-5'>
            <input 
              type="text"
              placeholder="First Name" 
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              />
            <input 
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              />
          </div>
          <h3 className="text-base font-medium mb-2">What&apos;s Your Email</h3>
          <input 
            type="email"
            placeholder="email@example.com" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            />
          <h3 className="text-base font-medium mb-2">Enter Your Password</h3>
          <input  
            type="password" 
            placeholder="Password" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            />
          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2 w-full text-base placeholder:text-sm"
          >Login</button>
        </form>
          <p className="text-center">Already have a account? <Link
            className="text-white"
            to="/captain-login"
          >Login here</Link></p>
      </div>
      {/* <div>
        <Link
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          to='/captain-signup'
        >Signup as a Captain</Link>
      </div> */}
    </div>
  )
}

export default CaptainSignup