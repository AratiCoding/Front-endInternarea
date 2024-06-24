
import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'
import { Link,useNavigate } from 'react-router-dom'
import '../Internships/details.css'
import axios from 'axios'
function JobDetailss() {
  const user=useSelector(selectUser)
  const [isDivVisible,setDivVisible]=useState(false)
  const [textarea,setTextarea]=useState("")
  const [company,setCompany]=useState("")
  const [category,setCategory]=useState("")
  const navigate=useNavigate();
  let search=window.location.search;
  const params=new URLSearchParams(search)
  const id=params.get("q")
  const [data,setData]=useState([])

  useEffect(()=>{
    const fetchData= async()=>{
   const response=await axios.get(`http://localhost:5000/api/job/${id}`)
   
   const {company,category}=response.data;
   setCompany(company)
   setCategory(category)
   setData(response.data)
    }
    fetchData()
 },[])
  
  
  const show=()=>{
    setDivVisible(true)
  }
  const hide=()=>{
    setDivVisible(false)
  }
  const submitApplication=async()=>{
    // const textarea=document.getElementById("textarea")
    if(textarea==="")
      {
        alert("Fill mandatory fields")
      }
      else{
        const bodyJson={
          coverLetter:textarea,
          category:category,
          company:company,
          user:user,
          Application:id

        }
          await axios.post("https://internshipbackend-teng.onrender.com/api/application",bodyJson).then((res)=>{
            console.log("Submitted");
          
          }).catch((err)=>{
            alert("Error happend")
          })
          alert("Done")
          navigate("/job")
      }
  }
    return (
      
    <div className='detail-app'>

          <div>
            <h1 className="font-bold text-center mt-6 text-3xl">{data.title}</h1>
            <div className='m-14 p-4 shadow-sm rounded-md border'>
            <p className="mb-4 mt-3" id='boxer'><i className='bi bi-arrow-up-right text-blue-500'></i>Actively Hiring</p>  
            <p className="text-xl  font-bold mt-4"> {data.title}</p>
           <p className='text-sm text-slate-300 font-bold'>{data.title}</p>
           <p><i class='bi bi-geo-alt-fill'></i>{data.location}</p>
           <div className="flex text-sm justify-between">
            <p className="mt-3"><i class='bi bi-play-circle-fill'></i>Start Date <br/>{data.StartDate}</p>
            <p className="mt-3"><i class='bi bi-calendar-fill'></i>Experience <br/>{data.Experience}</p>
            <p className="mt-3"><i class='bi bi-cash'></i>Salary <br/>{data.CTC}</p>
           </div>
           <div className="flex">
            <p className='bg-green-100 rounded-md  text-green-400'><i class='bi bi-clock'></i>25/07/2024</p>
           </div>
           <hr />
           <div className='aboutCompany flex justify-start'>
            <p className="mt-3 text-xl font-bold text-start">About{data.company}</p> 
            <br />
           </div>
           <div className="flex">

            <p className="text-blue-500">instagram page <i class='bi bi-arrow-up-right-square'></i></p>
          
           </div>
            <p className='mt-4'>{data.aboutCompany}</p>
            <div className="about_job">
                <p className="mt-3 text-xl font-bold text-start">About</p> 
                <p>{data.aboutJob}</p>
             </div>
             <p className="text-blue-500">Learn Business Communication</p>
             <div className="whocan">
              <p className="mt-3 text-xl font-bold text-start">Who can Apply</p>
              <p>{data.Whocanapply}</p>
              <p className="mt-3 text-xl font-bold text-start">Perks</p>
              <p>{data.perks}</p>
              <p className="mt-3 text-xl font-bold text-start">Additional Information</p>
              <p>{data.AdditionalInfo}</p>
              <p className="mt-3 text-xl font-bold text-start">No of opening</p>
              <p>{data.numberOfopning}</p>
                  <div className='flex align-middle justify-center mt-6 text-white font-bold '>
          <button className='flex justify-center align-center  bg-blue-500 w-40' onClick={show}>Apply</button>

          </div>
          </div>
          </div>
            
          {isDivVisible &&(
  <>
  <div className="application-page">
    <div className="bg">
      <button className='close2' onClick={hide} ><i className='bi-bi-x'></i> X</button>
      <p>Applyion for Company {data.company}</p>
      <p className='mt-3 text-sm font-bold text-start mb-3'>{data.aboutCompany}</p>

    </div>
    <div className="moreSteps">
      <p className='font-semibold text-xl'>Your resume</p>
      <small>your current resume will be submitted along with the application</small>

      <p className='mt-5 font-semibold text-xl'>Cover letter</p>
      <br />
      <p>why should we hire for this role?</p>
      <textarea name="coverLetter" placeholder='' id="text"  value={textarea} onChange={(e)=>setTextarea(e.target.value)}></textarea>
      <p className='mt-5 font-semibold text-xl'>your availiblity</p>
      <p>confirme your availiblity</p>

    </div>
    <div>
        <label>
          <input
            type="radio"
            value="Yes, I am available to join immediately"
           
          />
          Yes, I am available to join immediately
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I am currently on notice period"
           
          
          />
          No, I am currently on notice period
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I will have to serve notice period"
          
           
          />
          No, I will have to serve notice period
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Other"
            
       
          />
          Other <span className='text-slate-500'>
          (Please specify your availability)  </span> 
        </label>
      </div>
      <p className='mt-5 font-semibold text-xl'>Custom resume <span className='text-slate-500'>(Optional)</span></p>
      <small className='text-slate-500'>Employer can download and view this resume</small>

 
      <div className="submit flex justify-center">
        {user?(
    <button className='submit-btn' onClick={submitApplication}  >Submit application</button>
        ):(
          <Link to={"/register"}>
          <button className='submit-btn' >Submit application</button>
          </Link>
        )
          
        }
  </div>
  </div>
  </>
)

}   
           
    
    
    </div>
  
    </div>
  )
  
}

export default JobDetailss