import React from 'react'

export default function AuthorPage() {
  return (
    <div className=' min-h-screen flex items-center justify-center mt-20 mb-20'>
      <div className='max-w-2xl mx-auto p-1 text-center'>
        <div>
          <h1 className='text-4xl font font-bold text-center my-7'>Author</h1>
        </div>
        <div className='text-xl text-gray-600 text-left flex flex-col '>
          <h2 className='text-blue-600/100 font-bold underline decoration-pink-500 text-wrap'>Dr. Sushil Kumar</h2>
          <h4>Assistant Professor</h4>
          <p> Department of Botany</p>
          <p>Saheed Mangal Pandey Govt. Girls PG College,</p>
          <p>Madhavpuram (Meerut), 250002</p>

        </div>
        <div className='text-xl text-gray-600 text-left flex flex-col mt-10'>
          <h2 className='text-blue-600/100 font-bold underline decoration-pink-500'>Dr. Gourav Choudhir</h2>
          <h4>Research Assistant</h4>
          <p>Jamia Millia Islamia, Centre For Interdisciplinary Research In Basic Sciences</p>


        </div>
        <div className='text-xl text-gray-600 text-left flex flex-col mt-10 '>
          <h2 className='text-blue-600/100 font-bold underline decoration-pink-500'>Dr. Asimul Islam</h2>
          <h4>Professor</h4>
          <p>Jamia Millia Islamia, Centre For Interdisciplinary Research In Basic Sciences</p>

        </div>
        <div className='text-xl text-gray-600 text-left flex flex-col mt-10 '>
          <h2 className='text-blue-600/100 font-bold underline decoration-pink-500'>Sakshi Sharma</h2>
          <h4>Research Scholar</h4>
          <p> Department of Botany</p>
          <p> Saheed Mangal Pandey Govt. Girls PG College,</p>
          <p>Madhavpuram (Meerut), 250002</p>

        </div>
      </div>
    </div>
  )
}