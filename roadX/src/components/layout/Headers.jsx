import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'

import {HiOutlineMenuAlt1,} from 'react-icons/hi'
import {GrLogin} from 'react-icons/gr'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineClose}from 'react-icons/ai'
import { useAuth } from '../../context/Auth'
import logo from './assets/logo1.png'


const Headers = () => {
  const [toggle,setToggle]= useState(true);
  const [active,setActive]= useState("")
  const [auth,setAuth]=useAuth();
  const handelLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
  
    })
    localStorage.removeItem('auth')
  }

  return (
   <>
  
   <div className='w-full h-15 bg-gray-700 text-teal-400 p-2 flex'>
   <div className='w-10 h-15 bg-teal-700 pt-[4.5px] cursor-pointer hover:bg-gray-600 rounded-full flex justify-center ' onClick={() => setToggle(!toggle)}>{toggle ? <HiOutlineMenuAlt1 size={30}/> : <AiOutlineClose size={30} /> }
 </div>
 <Link 
 to="/"
 onClick={() => {
    setActive("");
    window.scrollTo(0, 0);
  }} > <img className='h-11 w-28 object-cover ml-10 flex justify-center items-center' src={logo} alt="logo" /> </Link>


    <div className="flex items-center ml-20">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="w-[40vw] px-4 py-2 bg-gray-700 text-white border rounded-full focus:border-bg-gray-100 focus:ring-teal-700 focus:outline-none focus:ring focus:ring-opacity-40 ml-10"
                    placeholder="Search..."
                />
                <button className="px-4 bg-gray-700 rounded-full hover:bg-gray-600 ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div className='flex ml-20 gap-2'>
        {!auth.user ?(<>
            <Link to='/login' className=' border-2 text-white rounded-full text-center p-2 flex gap-1 text-sm justify-center items-center hover:bg-gray-600 cursor-pointer hover:border-1 hover:border-gray-600 font-bold '>
          <GrLogin size={18}/> Login
          </Link>

          <Link to="/register" className=' w-[6rem] border-2  text-white rounded-full text-center p-2 flex gap-1 text-sm justify-center items-center hover:bg-gray-600 cursor-pointer hover:border-1 hover:border-gray-600 font-bold'>
          <AiOutlineUser size={18}/> Sign Up
          </Link>

          </>):(<><Link to="/login" onClick={handelLogout} className=' w-[6rem]  text-white border-2  rounded-full text-center p-2 flex gap-1 text-sm justify-center items-center hover:bg-gray-600 cursor-pointer hover:border-1 hover:border-gray-600  font-bold'>
          <AiOutlineUser size={18}/> logout
          </Link>
          <NavLink to={`/dashboard/${auth?.user?.role===1?"admin":"user"}`} className=' w-full border-2  rounded-full text-center p-2 flex gap-1 text-sm justify-center items-center hover:bg-gray-600 cursor-pointer hover:border-1 hover:border-gray-600  font-bold'>
          <AiOutlineUser size={18}/> {`${auth?.user?.name}'s Dashboard`}
          </NavLink>
          </>)}
          
        </div>
        </div>
        <div
            className={`${
              !toggle ? "flex" : "hidden"
            }   absolute  min-w-[30%] z-8  h-max`}
          >
           <div>


        <div
                  className='w-[50vw] h-[90vh] bg-slate-500 '
                 
                  onClick={() => {
                    setToggle(toggle);
                    
                  }}
                >
    
                  
            
                </div>
              
    </div>
           
               
            
          </div>

 
   </>
  )
}

export default Headers
