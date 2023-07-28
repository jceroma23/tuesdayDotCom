import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
        {
            name: 'Business Owner',
            role: 'Full administrator-level access to your own project, empowering you to oversee and manage all facets of the task management system.',
            administrator: true,
            canAssignTasks: true,
            canTrackProgress: true,
            canSetPriorities: true,
            canConfigureSystem: true,
            canAllocateBudget: true,
        },
        {
            name: 'Employee',
            role: 'Employees can create, update, and manage tasks, collaborate with team members, and track time for accurate project management. They also receive notifications for new tasks and approaching deadlines.',
            administrator: false,
            canAssignTasks: false, // Employees typically cannot assign tasks to others
            canTrackProgress: true,
            canSetPriorities: false, // Priorities are usually set by Business Owners
            canConfigureSystem: false, // Configuration is typically restricted to Business Owners
            canAllocateBudget: false, // Budget allocation is usually done by Business Owners
        },
        {
            name: 'Freelancer',
            role: 'Freelancer can create, update, and manage tasks, collaborate with team members, and track time for accurate project management. They also receive notifications for new tasks and approaching deadlines.',
            administrator: false,
            canAssignTasks: false, // Employees typically cannot assign tasks to others
            canTrackProgress: true,
            canSetPriorities: false, // Priorities are usually set by Business Owners
            canConfigureSystem: false, // Configuration is typically restricted to Business Owners
            canAllocateBudget: false, // Budget allocation is usually done by Business Owners
        },
    ]

const NewAccounts = () => {
    const [selected, setSelected] = useState(plans[0])
    const [fullName, setFullName] = useState('');
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
      };
    
    const handleSubmit = () => {
        if (fullName === '' || selected === plans[0]) {
            console.log('Please fill up form', selected)
        }
    }


  return (
    <div className="w-screen px-4 py-16">
      <div className="mx-auto w-full flex justify-center">

        <div className='max-w-md mx-10'>
            <h1 className='my-3 text-2xl'>Set up your New Account</h1>
            <h1 className='my-3 text-lg'>Choose your Role here: </h1>
            <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
            <div className="space-y-2">
                {plans.map((plan) => (
                <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                    `${
                        active
                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : ''
                    }
                    ${
                        checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                    }
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                >
                    {({ active, checked }) => (
                    <>
                        <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                            <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                checked ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                                {plan.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                checked ? 'text-sky-100' : 'text-gray-500'
                                }`}
                            >
                                <span>
                                {plan.role}
                                </span>{' '}
                                <span aria-hidden="true">&middot;</span>{' '}
                                {/* <span>{plan.disk}</span> */}
                            </RadioGroup.Description>
                            </div>
                        </div>
                        {checked && (
                            <div className="shrink-0 text-white">
                            <CheckIcon className="h-6 w-6" />
                            </div>
                        )}
                        </div>
                    </>
                    )}
                </RadioGroup.Option>
                ))}
            </div>
            </RadioGroup>
        </div>

        <div className='w-full max-w-md'>
            <h1 className='my-3 text-2xl'>Hi, Welcome to the Task Management Sytem</h1>
            <h1 className='my-3 text-lg'>Please put your personal details here</h1>
            <form>
                    <div className='mb-6'>
                         <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                         <input type="text" id="FullName" name='FullName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your FullName here"
                         onChange={handleFullNameChange}
                         required />
                    </div>

                    {/* <div className='mb-6'>
                         <label htmlFor="userPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age:</label>
                         <input type="password" id="userPassword" name='userPassword' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Password here" 
                         
                         required />
                     </div> */}
                     <div className='text-center text-red-900 font-bold'>
                     </div>
                   
                     <div className="mt-4">
                         <button
                         type="submit"
                         className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                        onClick={handleSubmit}
                         >
                         
                         Next
                         </button>


                         <button
                         type="button"
                         className="inline-flex justify-center rounded-md border border-transparent bg-rose-100 px-4 py-2 text-sm font-medium text-rose-900 hover:bg-rose-200 m-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                         >
                         Skip
                         </button>
                     </div>
            </form> 
        </div>

        </div>
       
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default NewAccounts