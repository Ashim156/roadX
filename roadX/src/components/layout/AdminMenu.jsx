import { NavLink } from "react-router-dom"


const AdminMenu = () => {
    const active=" bg-gray-500 shadow-lg shadow-gray-500/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg";
    
    const notactive="";
  return (
<>
<div className="-z-1 shadow-lg shadow-black text-center text-[40px] w-96 h-[100vh]  py-16 bg-gradient-to-br from-green-50 to-gray-200 ">
    <h2 className='text-teal-500 font-bold'><span className=" text-teal-500  hover:shadow-teal-500/40 font-bold rounded-lg">ADMIN</span> <span className=" text-gray-700  hover:shadow-gray-500/40 font-semibold rounded-lg">PANEL</span></h2>
    <div className=' grid text-center gap-2'>
      <NavLink to='/dashboard/admin/create-category' className={({isActive})=>`${isActive?active:notactive} hover:bg-gray-600 hover:text-white border-2 h-16 ` }>Create Category</NavLink>
     <NavLink to='/dashboard/admin/create-product'className={({isActive})=>`${isActive?active:notactive} hover:bg-gray-600 hover:text-white border-2 h-16 ` }>Create Product</NavLink>
    
      <NavLink to='/dashboard/admin/product'  className={({isActive})=>`${isActive?active:notactive} hover:bg-gray-600 hover:text-white border-2 h-16` }>Product Lists</NavLink>
      <NavLink to='/dashboard/admin/create-user'  className={({isActive})=>`${isActive?active:notactive} hover:bg-gray-600 hover:text-white border-2 h-16` }>User</NavLink>
 

      </div>
      </div>
  </>
  )
}

export default AdminMenu
