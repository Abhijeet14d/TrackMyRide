import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserLogout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/login');
            return;
        }

        axios.get("http://localhost:3000/users/logout", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if(response.status === 200){
                localStorage.removeItem('token');
                navigate('/login');
            }
        }).catch((err) => {
            console.log(err);
            navigate('/login');
        })
    },[navigate]);
  return null
}

export default UserLogout