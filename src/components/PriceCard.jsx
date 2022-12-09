import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import GreenBtn from './GreenBtn';

const PriceCard = ({ priceCategory, dollor, features }) => {
    return (
        <div className='bg-white text-slate-900 m-4 rounded-xl overflow-hidden'>
            <div className='text-center bg-darkColor text-white py-4 uppercase'>
                <p>{priceCategory}</p>
            </div>

            <div className='p-4'>
                <p className='text-4xl font-bold px-5 py-4 flex'>{`$${dollor}`}
                    <span className='text-xl text-darkColor flex flex-col justify-end'>/mo</span>
                </p>
            </div>

            <p className='text-base px-10 py-2 text-slate-500'>
                Now radiant parting quoth all spoken she tempest seeming of, gently door
                you was many the the raven perched. Both ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum sint voluptatibus, magnam officia voluptates..
            </p>

            <div className='text-2xl'>
                <div className='px-8'>

                    {
                        features.map(({id, title}) => (
                            <p key={id} className='flex items-center py-3 text-lg'>
                                <FaPlusCircle className='w-5 mr-3 text-lightColor' /> {title}
                            </p>
                        ))
                    }

                </div>

                <GreenBtn title='get started' className='capitalize text-xl w-full py-4 mt-14 rounded-none hover:border-none' />
            </div>
        </div>

    )
}

export default PriceCard
