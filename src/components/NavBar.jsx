import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Appcontext } from '../context/context';

const NavBar = () => {
  const navigate=useNavigate();
  const{flag,setFlag}=useContext(Appcontext);
  return (
    <div className='bg-amber-50 px-10 flex sm:justify-around justify-center absolute w-full '>
      <img className="cursor-pointer w-16 " onClick={()=>navigate("/")} src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="" />
      <div className='hidden sm:flex justify-between items-center w-[50%] '>
        <NavLink to={"/"} className="text-black font-semibold">
          Home
          <hr className='hidden' />
        </NavLink>
        <NavLink to={"/next"} className="text-black font-semibold">
          Future Forecast
          <hr className='hidden'/>
        </NavLink>
             <NavLink to={"/about"} className="text-black font-semibold">
          About
          <hr className='hidden'/>
        </NavLink>
      </div>
        <i className="fi fi-br-menu-burger absolute top-7 sm:hidden left-6" onClick={()=>setFlag(prev=>!prev)}></i>
      {flag&&<div className='sm:hidden h-screen w-[310px] bg-blue-100 text-xl absolute left-0 p-7'>
        <i className="fi fi-sr-cross-circle w-full flex justify-end " onClick={()=>setFlag(prev=>!prev)}></i>
        <div className='flex flex-col w-full justify-center gap-9 px-6 pt-8'>
                  <NavLink to={"/"} className="text-black font-semibold">
          Home
          <hr className='hidden' />
        </NavLink>
        <NavLink to={"/next"} className="text-black font-semibold">
          Future Forecast
          <hr className='hidden'/>
        </NavLink>
        <NavLink to={"/about"} className="text-black font-semibold">
          About
          <hr className='hidden'/>
        </NavLink>
        </div>
      </div>}
    </div>
  )
}

export default NavBar
