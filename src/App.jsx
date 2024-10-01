
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/companents/Navbar/navbar'
import Login from './assets/pages/login'
import Sign from './assets/pages/sign-up'
import NotPage from './assets/pages/not-page'
import Home from './assets/pages/home.jsx'
import About from './assets/pages/about'
import Contact from './assets/pages/contact'
import Setting from './assets/pages/setting'
import Info from './assets/pages/more-info'
import Footer from './assets/companents/footer/footer'
import Slide from './assets/companents/slider/slider'
import CategoryInfo from './assets/pages/category-info'
import PostCarPage from './assets/pages/post-page/post-car'
import PostCategory from './assets/pages/postCategory/postCategroy'



function App() {

  return (
    <>
    <Navbar/>
    <main className='main'>

    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='*' element={<NotPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/car/:carsId' element={<Info/>}/>
      <Route path='/category/:categoryId' element={<CategoryInfo/>}/>
      <Route path='/postCarPage' element={<PostCarPage/>}/>
      <Route path='/postCategory' element={<PostCategory/>}/>

    </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
