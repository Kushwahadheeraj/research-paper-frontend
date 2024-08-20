import React from 'react'

export default function Acknowledgements() {
  return (
    <div className=' flex xl:py-32 py-24 pl-2 items-center lg:justify-center'>
      <div className='max-w-2xl p-1 text-center'>
        <div>
          <h1 className='lg:text-4xl text-2xl font font-bold text-center my-6'>ACKNOWLEDGEMENTS</h1>
        </div>
        <div className='lg:text-xl text-base text-gray-600 text-left flex flex-col gap-6'>
          <p>The development of the FDP platform utilized the following established
            resources: PubChem, classification tools, web scraping tools (e.g.,
            SpiderChem), ChEMBL, and SwissADME and we are thankful to the
            developers of these software tools.These resources facilitated data
            acquisition, standardization, and integration, ensuring the accuracy and
            comprehensiveness of the database.
          </p>
        </div>
      </div>
    </div>
  )
}