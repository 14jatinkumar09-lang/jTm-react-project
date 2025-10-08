import { useState } from 'react'
import {RecoilRoot} from 'recoil'

import {BrowserRouter,Routes,Route} from 'react-router-dom' ;
import './App.css'
import {SignUp} from './pages/SignUp'
import {SignIn} from './pages/SignIn'
import {Home} from './pages/Home'
import {SendMoney} from './pages/SendMoney'
import {UpdateInfo} from './pages/UpdateInfo'
import { WelcomePage } from './pages/WelcomePage.jsx'


function App() {
// className='flex justify-center items-center h-screen'

  return <div >
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path="/home" element={ <Home/>}/>
      <Route path="/sendMoney" element={ <SendMoney/>}/>
      <Route path="/updateProfile" element={ <UpdateInfo/>}/>
    </Routes>
    </BrowserRouter>

    
      
      
  </div>
}

export default App
