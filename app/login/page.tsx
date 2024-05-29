import Link from 'next/link'
import React from 'react'
import { validateUser } from '../actions/actions'

function page() {
    return (
        <div className='h-screen flex  items-center justify-center'>
            <div className=" w-full my-auto text-black">

                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">

                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                            <div
                                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                                style={{
                                    backgroundImage:
                                        'url("https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600")'
                                }}
                            />

                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                                    Login to your Account!
                                </h3>
                                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" action={validateUser}>

                                    <div className="mb-4">
                                        <label
                                            className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name='email'
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-between">
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                                className="block mb-2 text-sm font-bold text-gray-700 dark:"
                                                htmlFor="password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-black border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type="password"
                                                placeholder="******************"
                                                name='password'
                                                required
                                            />
                                            <p className="text-xs italic text-red-500">
                                                Please choose a password.
                                            </p>
                                        </div>

                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />

                                    <div className="text-center">
                                        <Link
                                            className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="/signup"
                                        >
                                            New account? Sign up!
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
