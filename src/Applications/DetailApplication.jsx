
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DetailApplication() {
    let search=window.location.search;
    const params=new URLSearchParams(search);
    const id=params.get("q")
    const [data,setData]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchData=async()=>{
          const response=await axios.get(`https://internshipbackend-teng.onrender.com/api/application/${id}`)
       
          setData([response.data])
        }
        fetchData();
      },[id])
      const handleAcceptAndReject=async(id,action)=>{
         try{
          const response=await axios.put(`https://internshipbackend-teng.onrender.com/api/application/${id}`,{action})
          const updateApplication=data.map(app=>(app._id===id?response.data.data:app));
          setData(updateApplication)
          alert("Done")
          navigate("/applications")
        }catch(error){
          console.log(error) 
        }
      };
      console.log(data)
  return (
    <div>
              { 
     
            data.map((data)=>( 
              <section class="text-gray-600 body-font overflow-hidden">
              <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                  <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover  rounded" src={data.user.photo}/>
                  <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="text-sm title-font  tracking-widest">Company Name</span> 
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 mx-10 -mt-3">{data.company}</h1>
                    </div>
                    <div className="flex mt-2">
                    <span>Cover letter</span>
                    <p class="leading-relaxed mx-20 font-bold">{data.coverLetter}</p>
                    </div>
                      <div class="flex mt-4">
                        <span class="mr-3">Application Date</span>
                        <p className='mx-8 font-bold'>{new Date(data?.createAt).toLocaleDateString()}</p>
                      </div>
                  <div className="flex mt-4">                   
                    <h4>Applied By</h4>
                      <p className='mx-20 font-bold'>{data.user.name}</p>
                  </div>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    </div>
                    <div className="flex justify-between">
                    <button className='bg-green-700 text-white p-2 font-bold'
                     onClick={()=>handleAcceptAndReject(data._id,"accepted")}>Accept</button>
                    <button className='bg-red-700 text-white p-2 font-bold' 
                    onClick={()=>handleAcceptAndReject(data._id,"rejected")}>Reject</button>
                  </div>
                  </div>
                </div>
              </div>
            </section>
            ))
        }
    </div>
  )
}
export default DetailApplication