import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import { useSelector } from 'react-redux';


const Loader = () => {
  const isloaderPage = useSelector((state) => state.loader.isLoading)

  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
          <h1 className='text-xl text-emerald-800'>Loading Please wait</h1>
            <div className='flex justify-center w-full mt-3'>
              <DotLoader
              color='#36d7b7'
              loading={isloaderPage}
              size='60px'
              aria-label="Loading Spinner"
              data-testid="loader"
              />
            </div>
        </div>
    </div>
  )
}

export default Loader