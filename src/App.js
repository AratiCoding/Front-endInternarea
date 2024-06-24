import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import {Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer/footer';
import Register from './Components/auth/Register';
import Intern from './Components/Internships/Intern';
import JobAvl from './Components/Job/JobAvl';
import Profile from './profile/Profile';
import JobDetails from './Components/Job/JobDetails';
import InternDetail from './Components/Internships/InternDetails';
import AdminLogin from '../src/Admin/AdminLogin';
import Adminpanel from '../src/Admin/AdminPanel'
import PostInternships from './Admin/Postinternships';
import ViewAllapplication from './Admin/ViewAllApplications'
import UserApplication from './profile/UserApplication'
import UserApplicationDetail from './Applications/DetailApplicationUser'
import { useDispatch,useSelector } from 'react-redux';
import { selectUser } from './Features/Userslice';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { login,logout} from "./Features/Userslice";
import DetailApplication from './Applications/DetailApplication';

function App() {
 const user=useSelector(selectUser);
 const dispatch=useDispatch();
 useEffect(() => {
   auth.onAuthStateChanged((authUser)=>{
  if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );
  return (
  
    <div className="App">
     <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/internship' element={<Intern/>}/>
      <Route path='/job' element={<JobAvl/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/detailJob' element={<JobDetails/>}/>
      <Route path='/detailInternship' element={<InternDetail/>}/>
      <Route path='/detailapplication' element={<DetailApplication/>}/>
      <Route path='/adminLogin' element={<AdminLogin/>}/>
      <Route path='/adminpanel' element={<Adminpanel/>}/>
      <Route path='/postInternship' element={<PostInternships/>}/>
      <Route path='/applications' element={<ViewAllapplication/>}/>
      <Route path='/userapplicationdetail' element={<UserApplicationDetail/>}/>
      <Route path='/userapplication' element={<UserApplication/>}/>
    </Routes>
    <Footer/>
    </div>
 
  );
}

export default App;
