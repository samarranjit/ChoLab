import React, { useEffect } from 'react'
import axiosInstance from '../../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [user, setUser] = React.useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate();

    useEffect(() => {
        const checkStatus = async () => {
            const res = await axiosInstance.get(`${process.env.REACT_APP_API_BASE_URL}/api/user/status`);
            if (res.data === true)
                window.location.href = "/admin"
        }
        checkStatus();
    }, [])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`${process.env.REACT_APP_API_BASE_URL}/api/user/login`, user);
            if(response.status === 200){
                // localStorage.setItem('token', JSON.stringify(response.data))
                navigate("/admin")
            }else{
                alert(response.data.message);
            }
        } catch (error) {
            alert("Login Failed");
            
        }
    }

    const handleChange = (e)=>{
       const {name , value} = e.target;
        setUser(prev=>({
            ...prev,
            [name] : value 
        }))
    }

  return (
    <>
        <div className="h-screen bg-secondary">
            <div className="box h-screen flex flex-col gap-5 text-primary justify-center items-center">

            <h1 className='text-2xl'> <section className='inline border-b-[2px] p-2'> Admin Login</section>
            </h1>

            <div className="login-body flex flex-col gap-5 mt-7">
                <input type="text" placeholder='Email' name='email' className='p-3 bg-secondary border-2 focus:border-b-[5px] focus:outline-none ' onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' className='p-3 bg-secondary border-2 focus:border-b-[5px] focus:outline-none 'onChange={handleChange}/>
            </div>
            <button className='border-[1px] w-[12%] p-2 hover:bg-primary hover:text-secondary duration-200' onClick={handleSubmit}>Login</button>
            </div>  
        </div>
    </>
  )
}

export default AdminLogin