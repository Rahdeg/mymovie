import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Loader from './Loader'

const Membership = () => {
    const [isBillingLoading, setBillingLoading] = useState(false)
    const {user} =useAuth()

    const manageSubscription = () => {
          setBillingLoading(true)
      }

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
        <div className=' space-y-2 py-4'>
            <h4 className=" text-lg text-[gray]">Membership & Billing</h4>
            <button
          disabled={isBillingLoading  }
          className="h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5"
          onClick={manageSubscription}
        >
          {isBillingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            'Cancel Membership'
          )}
        </button>
        </div>
        <div className=' col-span-3'>
            <div className='flex flex-col md:flex-row border-b justify-between border-white/10 py-4'>
                <div>
                    <p className='font-medium'>{user?.email}</p>
                    <p className='text-[gray]'>password:**********</p>
                </div>
                <div>
                    <p className='memberLink'>Change email</p>
                    <p className='memberLink'>Change Password</p>
                </div>
            </div>
            <div className='flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0'>
                <div>
                    <p>Your Membership will end soon</p>
                </div>
         <div className="md:text-right">
            <p className="memberLink">Manage payment info</p>
            <p className="memberLink">Add backup payment method</p>
            <p className="memberLink">Billing Details</p>
            <p className="memberLink">Change billing day</p>
          </div>
            </div>

        </div>
    </div>
  )
}

export default Membership