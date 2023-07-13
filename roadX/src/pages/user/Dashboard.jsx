import AdminMenu from '../../components/layout/AdminMenu'
import Layout from '../../components/layout/Layout'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import UserMenu from '../../components/layout/UserMenu'


const Dashboard = () => {
  const[auth]=useAuth()
  return (
    <Layout>

      <div className='w-[60%] grid grid-cols-2'>
      <UserMenu/>
   <div className='border-2 mt-6'>
     <div className="p-3 ">
   <h1 >User Name: {auth?.user?.name}</h1>
    <h1>User Email: {auth?.user?.email}</h1>
    <h1>User Phone: {auth?.user?.phone}</h1>
    <h1>User Address: {auth?.user?.address}</h1>
   </div>

   </div>
   </div>
    </Layout>
  )
}

export default Dashboard
