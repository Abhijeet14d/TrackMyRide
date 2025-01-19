import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
          <img className="w-20 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <div className="bg-white py-5 px-5 pb-10">
            <h2 className="text-2xl font-bold">Get Started</h2>
            <Link className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
              to="/login" 
            >Continue</Link>
          </div>
      </div>
    </div>
  )
}

export default Home