import { NavLink } from "react-router-dom"


const UserMenu = () => {
    const active="bg-black text-white";
    const notactive="";
  return (
<>
<div className="text-center">
    <h2 >User PANEL</h2>
    <div className=' grid text-center '>
      <NavLink to='/dashboard/user/profile' className={({isActive})=>`${isActive?active:notactive} hover:bg-slate-500 border-2` }>$$$$$S</NavLink>
      <NavLink to='/dashboard/user/order'className={({isActive})=>`${isActive?active:notactive} hover:bg-slate-500 border-2` }>order</NavLink>

 

      </div>
      </div>
  </>
  )
}

export default UserMenu
