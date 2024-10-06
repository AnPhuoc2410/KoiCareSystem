import { Link } from 'react-router-dom'
import { useDarkMode } from '../../../components/DarkModeContext'
import Header from '../../../components/Member/Header'
import LeftSideBar from '../../../components/Member/LeftSideBar'
import TopLayout from '../../../layouts/TopLayout'
import { useState } from 'react'
import axios from 'axios'

function Checkout() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const { isDarkMode } = useDarkMode()

  const addAddress = async () => {
    try {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('id')
      await axios.post(
        'https://koicaresystem.azurewebsites.net/api/orders/order',
        {
          userId: userId,
          address: address,
          phone: phone,
          recipientName: name
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setAddress('')
      setPhone('')
      setName('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className='h-screen flex'>
        <LeftSideBar />

        <div
          className={`relative ${
            isDarkMode ? 'bg-custom-dark text-white' : 'bg-white text-black'
          } shadow-xl flex-1 flex-col overflow-y-auto overflow-x-hidden`}
        >
          <Header />

          <div className='py-5 px-[30px] mx-auto '>
            <TopLayout text='Recommendations' textName='Checkout' links='member/recommendations' />

            <div className='border border-gray-200 px-10 py-5 rounded-xl'>
              <ol className='items-center flex w-full px-52 pb-20 pt-14 justify-center text-center text-sm font-medium text-gray-700'>
                <li className='flex items-center after:mx-2 after:mb-10 after:h-1 after:w-full w-full after:border-b after:border-gray-400 dark:text-primary-500'>
                  <span className='flex flex-col'>
                    <svg
                      className='size-10 rounded-full bg-gray-400 flex items-center justify-center text-white'
                      focusable='false'
                      aria-hidden='true'
                      viewBox='0 0 24 24'
                      data-testid='CheckCircleIcon'
                    >
                      <path
                        d='M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-3 16l-5-5 1.4-1.4 3.2 3.2 7.6-7.6L19 8l-9 9z'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1'
                        className='text-white '
                      />
                    </svg>

                    <div className='mt-4'>Cart</div>
                  </span>
                </li>
                <li className='flex items-center after:mx-2 after:mb-10 after:h-1 after:w-full w-full after:border-b after:border-gray-400 dark:text-primary-500'>
                  <span className='flex flex-col'>
                    <div className='w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white '>
                      2
                    </div>
                    <div className='mt-4'>Address</div>
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='flex flex-col'>
                    <div className='w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white '>
                      3
                    </div>
                    <div className='mt-4'>Payment</div>
                  </span>
                </li>
              </ol>

              <div className='border border-gray-200 px-10 py-5 mt-10 rounded-xl'>
                <div className='text-2xl font-semibold'>Address</div>
                <div className='flex mt-7 text-xl gap-24 justify-between items-center w-full'>
                  <div className='flex flex-col w-full'>
                    <div className=''>Full Name</div>
                    <input
                      type='text'
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Nguyen Van A'
                      className='border px-2 mt-3 rounded-lg py-3 border-gray-200 outline-none focus:ring-2 focus:ring-blue-400'
                    ></input>
                  </div>
                  <div className='flex flex-col w-full'>
                    <div className=''>Phone</div>
                    <input
                      type='text'
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder='0123456789'
                      className='border px-2 mt-3 rounded-lg py-3 border-gray-200 outline-none focus:ring-2 focus:ring-blue-400'
                    ></input>
                  </div>
                </div>
                <div className='flex flex-col w-full mt-7 text-xl'>
                  <div className=''>Address</div>
                  <input
                    type='text'
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Quan 9, TP Ho Chi Minh'
                    className='border px-2 mt-3 rounded-lg py-3 border-gray-200 outline-none focus:ring-2 focus:ring-blue-400'
                  ></input>
                </div>
              </div>

              <div className='border border-gray-200 px-10 py-5 mt-10 rounded-xl'>
                <div className='text-2xl font-semibold'>Order Summary</div>
                <div className='flex mt-7 text-xl justify-between'>
                  <div className=''>Sub Total</div>
                  <div className=''></div>
                </div>

                <div className='flex mt-7 text-xl justify-between'>
                  <div className=''>Discount</div>
                  <div className=''>$0.00</div>
                </div>

                <div className='flex mt-7 text-xl justify-between'>
                  <div className=''>Shipping</div>
                  <div className=''>Free</div>
                </div>

                <div className='flex mt-7 text-xl justify-between'>
                  <div className='font-medium'>Total</div>
                  <div className=''></div>
                </div>
              </div>

              <div className='flex justify-between mt-8'>
                <Link to='/member/cartList' className='px-6 py-3 bg-gray-300 text-white rounded-lg cursor-pointer'>
                  Back
                </Link>
                <button
                  type='submit'
                  onClick={() => addAddress()}
                  className='px-6 py-3 bg-blue-400 text-white rounded-lg cursor-pointer'
                >
                  Complete order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
