import axios from 'axios'
import React from 'react'

function AdminLogin() {
    const [user, setUser] = React.useState({
        username : "",
        password : ""
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/admin-login", user);
            if(response.data.success){
                alert(response.data.message)
                localStorage.setItem('token', JSON.stringify(response.data))
                window.location.href = '/admin';
            }else{
                alert(response.data.message);
            }
        } catch (error) {
            alert(error.message);
            
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

            <h1 className='text-2xl'> <section className='inline border-b-[2px] p-2'> Admin Login</section></h1>
            <div className="login-body flex flex-col gap-5 mt-7">
                <input type="text" placeholder='Username' name='username' className='p-3 bg-secondary border-2 focus:border-b-[5px] focus:outline-none ' onChange={handleChange}/>
                <input type="text" placeholder='Password' name='password' className='p-3 bg-secondary border-2 focus:border-b-[5px] focus:outline-none 'onChange={handleChange}/>
            </div>
            <button className='border-[1px] w-[12%] p-2 hover:bg-primary hover:text-secondary duration-200' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </>
  )
}

export default AdminLogin