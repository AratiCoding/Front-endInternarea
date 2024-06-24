
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function PostJobs() {
    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');
    const [aboutCompany, setAboutCompany] = useState('');
    const [aboutInternship, setAboutInternship] = useState('');
    const [whoCanApply, setWhoCanApply] = useState('');
    const [perks, setPerks] = useState('');
    const [numberOfOpening, setNumberOfOpening] = useState('');
    const [stipend, setstipend] = useState('');
    const [startDate, setStartDate] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
   const navigate=useNavigate()
   const sendData=(e)=>{
    e.preventDefault();
if( title === '' &&
companyName === '' &&
location === '' &&
category === '' &&
aboutCompany === '' &&
aboutInternship === '' &&
whoCanApply === '' &&
perks === '' &&
numberOfOpening === '' &&
stipend === '' &&
startDate === '' &&

additionalInfo === ''){

    alert("fill the Blanks ")
}


else{
    const bodyJosn={
        title:title,
        company:companyName,
        location:location,
        category:category,
        aboutCompany:aboutCompany,
        aboutInternship:aboutInternship,
        Whocanapply:whoCanApply,
        perks:perks,
        numberOfopning:numberOfOpening,
        CTC:CTC,
        StartDate:startDate,
        AdditionalInfo:additionalInfo,

    }
axios.post("https://internshipbackend-teng.onrender.com/api/job",bodyJosn).then((res)=>{
    console.log(res.data)
  }).catch((err)=>
  console.log(err))
  
}
alert(" Internship Posted is Successfully")
navigate("/adminpanel")
  }
  return (
    <div className=' justify-center  w-full'>
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Post a Internship</h2>
     
      <div>
        <label for="title" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">title*</label>
        <input name="title" value={title} onChange={(e)=>setTitle(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="company-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">company name*</label>
        <input name="company-name" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="Location" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Location</label>
        <input name="Location" value={location} onChange={(e)=>setLocation(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
    <div class="sm:col-span-2">
        <label for="category" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">category*</label>
        <input name="category" value={category} onChange={(e)=>setCategory(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="aboutCompany" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">aboutCompany*</label>
        <input name="aboutCompany" value={aboutCompany} onChange={(e)=>setAboutCompany(e.target.value)} class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div class="sm:col-span-2">
        <label for="aboutInternship" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">aboutInternship*</label>
        <textarea name="aboutInternship" value={aboutInternship} onChange={(e)=>setAboutInternship(e.target.value)} class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>
      <div class="sm:col-span-2">
        <label for="Whocanapply" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Whocanapply*</label>
        <textarea name="Whocanapply" value={whoCanApply} onChange={(e)=>setWhoCanApply(e.target.value)} class="h-34 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>
      <div class="sm:col-span-2">
        <label for="perks" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">perks*</label>
        <input name="perks" value={perks} onChange={(e)=>setPerks(e.target.value)} class=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></input>
      </div>
      <div class="sm:col-span-2">
        <label for="numberOfOpening" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Number Of Opening*</label>
        <input name="numberOfOpening" value={numberOfOpening} onChange={(e)=>setNumberOfOpening(e.target.value)} class=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></input>
      </div>
      <div class="sm:col-span-2">
        <label for="CTC" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">CTC*</label>
        <input name="CTC"value={CTC} onChange={(e)=>setstipend(e.target.value)}  class=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></input>
      </div>
      <div class="sm:col-span-2">
        <label for="startDate" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Start Date*</label>
        <input type='date' value={startDate} onChange={(e)=>setStartDate(e.target.value)} name="startDate" class=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></input>
      </div>
      
      <div class="sm:col-span-2">
        <label for="additionalInfo" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Additional Information*</label>
        <textarea name="additionalInfo" value={additionalInfo} onChange={(e)=>setAdditionalInfo(e.target.value)} class="h-12 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      </div>
      </div>
</section>  
    </div>
  )
}

export default PostJobs