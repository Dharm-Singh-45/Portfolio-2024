import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ManageSkills from './pages/ManageSkills'
import ManageTimeline from './pages/ManageTimeline'
import ManageProjects from './pages/ManageProjects'
import ViewProject from './pages/ViewProject'
import UpdateProject from './pages/UpdateProject'
/* React-Toastify  */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { getUser } from './store/slices/userSlice.js'
import './App.css'
import { getAllMessages } from './store/slices/messagesSlice'
import { getAllTimeline } from './store/slices/timelineSlice'
import { getAllSkills } from './store/slices/skillSlice'
import { getAllSoftwareApplications } from './store/slices/softwareApplicationSlice'
import { getAllProjects } from './store/slices/projectSlice'



const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const wakeBackend = async () => {
      try {
        // Replace with your actual backend URL
        await fetch('https://portfolio-backend-nlxk.onrender.com/api/v1/user/wake-up')

         // Check if the response is successful
         if (!response.ok) {
          throw new Error('Failed to wake up the backend')
        } 
        
        
      } catch (error) {
        toast.error(`Error waking up backend: ${error.message}`)
      }
    }

    wakeBackend()
  }, []) // Empty dependency array to run this only once on component mount


  useEffect(()=>{
    dispatch(getUser())
    dispatch(getAllMessages())
    dispatch(getAllTimeline())
    dispatch(getAllSkills())
    dispatch(getAllSoftwareApplications())
    dispatch(getAllProjects())
  },[])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/password/forgot' element={<ForgotPassword/>}/>
        <Route path='/password/reset/:token' element={<ResetPassword/>}/>
        <Route path='/manage/skills' element={<ManageSkills/>} />
        <Route path='/manage/timeline' element={<ManageTimeline/>}/>
        <Route path='/manage/projects' element={<ManageProjects/>}/>
        <Route path='/view/project/:id' element={<ViewProject/>}/>
        <Route path='/update/project/:id' element={<UpdateProject/>}/>
      </Routes>
      <ToastContainer position='bottom-right' theme='dark'/>
    </Router>
  )
}

export default App
