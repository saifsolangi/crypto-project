import React from 'react'
import ThemeToggle from './ThemeToggle'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='rounded-div mt-8 pt-8 text-primary'>
            <div className='grid md:grid-cols-3 pl-8'>
                <div className=' text-center md:text-left md:border-r-2 pr-6 py-4'>
                    <h1 className='text-xl font-bold'>
                        Crypto Base
                    </h1>
                    <p>
                        Crypto Base provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.
                    </p>
                </div>
                <div className='flex justify-evenly w-full md:max-w-[300px] md:border-r-2 pr-6'>
                    <div>
                        <h2 className='font-bold'>Support</h2>
                        <ul>
                            <li className='text-sm py-2'>Help Center</li>
                            <li className='text-sm py-2'>Contact Us</li>
                            <li className='text-sm py-2'>API Status</li>
                            <li className='text-sm py-2'>Documentation</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>Info</h2>
                        <ul>
                            <li className='text-sm py-2'>About Us</li>
                            <li className='text-sm py-2'>Careers</li>
                            <li className='text-sm py-2'>Invest</li>
                            <li className='text-sm py-2'>Legal</li>
                        </ul>
                    </div>
                </div>
                <div className='text-right pr-9'>
                    <div className='w-full flex justify-end'>
                        <div className='w-full md:w-[300px] py-4 relative'>
                            <div className='flex justify-center md:justify-end py-4 md:py-4 md:pb-4 mt-[-1rem]'>
                                <ThemeToggle />
                            </div>
                            <p className='text-center md:text-right'>Sign up for crypto news</p>
                            <div className='py-4'>
                                <form>
                                    <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter Your Email' />
                                    <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign Up</button>
                                </form>
                            </div>'
                            <div className='flex py-4 justify-between text-accent'>
                                <AiOutlineInstagram />
                                <FaTiktok />
                                <FaTwitter />
                                <FaFacebook />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-4'>Powered By CoinGecko</p>
        </div>
    )
}

export default Footer