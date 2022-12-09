import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import GreenBtn from './GreenBtn';

const Footer = () => {
  return (
    <div className='w-full bg-gray-900 text-gray-400 py-8 px-2 border-t-2'>
       
        <div className='flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12'> 
            <div className='flex flex-col gap-8 md:flex-row items-center justify-center w-full'>

                {/* social icons  */}
                <div className='w-3/4 md:w-1/2'>
                    <div className='grid grid-cols-2 mx-auto w-4/5 gap-10'>
                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3     cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <FaFacebook size={25} />
                        </div>

                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3     cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <FaLinkedin size={25} />
                        </div>

                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3     cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <FaGithub size={25} />
                        </div>

                        <div className='flex items-center justify-center rounded-md shadow-md shadow-lightColor p-3     cursor-pointer hover:scale-105 duration-200 ease-in'>
                            <FaTwitter size={25} />
                        </div>
                    </div>
                </div>

                {/* newsletter  */}
                <div className='w-3/4 md:w-1/2'>
                    <div className='w-full pt-8 md:pt-2'>
                        <p className='font-bold uppercase mb-8 text-lightColor text-lg text-center md:text-left'>
                            Subscribe to our newsletter 
                        </p>

                        <form action="" method='POST' className='flex flex-col sm:flex-row'>
                            <input type="text" name='email' className='w-full p-2 mr-4 mb-4 rounded-md text-gray-900 outline-none' placeholder='Daily newsletter...' />
                            <GreenBtn title='Subscribe' className='px-2 py-2 mb-4 ' />
                        </form>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer
