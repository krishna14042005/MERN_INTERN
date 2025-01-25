import React from 'react'
import ClassCompEG from './components/components/classComponents/ClassCompEG'
import About from './components/components/FunctionalComponents/About'
import Constact from './components/components/FunctionalComponents/Contact'
import Gallery from './components/components/FunctionalComponents/Gallery'
import Home from './components/components/FunctionalComponents/Home'
import Navbar from './components/components/FunctionalComponents/Navbar'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Signup from './components/components/FunctionalComponents/Signup'
import UserState from './components/components/FunctionalComponents/Hooks/UseState'
import UseEffect from './components/components/FunctionalComponents/Hooks/UseEffect'
import UseEffectAPI from './components/components/FunctionalComponents/Hooks/UseEffectAPI'
import UseEffectAPIimage from './components/components/FunctionalComponents/Hooks/UseEffectAPIimage'
import UseRef from './components/components/FunctionalComponents/Hooks/UseRef'
import UseMemo from './components/components/FunctionalComponents/Hooks/UseMemo'
import UseCallback from './components/components/FunctionalComponents/Hooks/UseCallback'
import UseReducer from './components/components/FunctionalComponents/Hooks/UseReducer'
import ReactLifecycleMethods from './components/components/classComponents/ReactLifecycleMethods'
import Student from './components/components/FunctionalComponents/Hooks/Student'
import Memo from './components/components/FunctionalComponents/Menoization/Memo'
 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Constact />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/ReactLifecycleMethods" element={<ReactLifecycleMethods/>}></Route>
        <Route path="/use-state" element={<Constact />}></Route>
        <Route path='/useEffect' element={<UseEffect />}></Route>
        <Route path="/UseState" element={<UserState/>}></Route>
        <Route path="/UseEffectAPI" element={<UseEffectAPI/>}></Route>
        <Route path="/useimg" element={<UseEffectAPIimage/>}></Route>
        <Route path="/UseReducer" element={<UseReducer/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="UseCallback" element={<UseCallback/>}></Route>   
        <Route path="/Student" element={<Student/>}></Route>
        <Route path='/Memo' element={<Memo/>}></Route> 
        <Route path="/Signup" element={<Signup/>}></Route>
        
        
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App;