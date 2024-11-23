

import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProjectView from './pages/ProjectView'
import Home from './pages/Home'
import Footer from './pages/sub-components/Footer'
import { useEffect } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

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



  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <Router>
          <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/project/:id' element={<ProjectView/>} />
          </Routes>
          <Footer/>
          <ToastContainer position='bottom-right' theme='dark' />
        </Router>

      </ThemeProvider>
    </>
  )
}

export default App
