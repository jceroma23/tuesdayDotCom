import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Registration = ({ handleRegistrationModalClose, registrationModal }) => {
  return (
    <Transition appear show={registrationModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleRegistrationModalClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
            {/* Form Login */}
                <form action="POST">
                    <Dialog.Panel className="w-96 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 mb-6"
                    >
                        Register your account
                    </Dialog.Title>

                    <div className='mb-6'>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email here" required />
                    </div>

                    <div className='mb-6'>
                        <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Username here" required />
                    </div>

                    <div className='mb-6'>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Username here" required />
                    </div>

                    {/* Login Functionality */}
                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        onClick={handleRegistrationModalClose}
                        >
                        Register
                        </button>


                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                        onClick={handleRegistrationModalClose}
                        >
                        Cancel
                        </button>
                    </div>

                    </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
    </Transition>
  )
}

export default Registration