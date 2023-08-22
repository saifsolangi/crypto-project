import React, { useState } from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }


    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }

    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            console.error(err)
        }
    }




    return (
        <div>
            <div className='max-w-[400px] mx-auto min-w-[600px] px-4 py-20'>
                <h1 className='text-2xl font-bold'>Sign Up</h1>
                <form>
                    <div className='my-4'>
                        <label>Email</label>
                        <div onChange={(e) => setEmail(e.target.value)} className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input className='w-full p-2 bg-primary border border-input rounded-2xl' type='email' />
                            <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
                        </div>
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <div onChange={(e) => setPassword(e.target.value)} className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input className='w-full p-2 bg-primary border border-input rounded-2xl' type='password' />
                            <AiFillLock className='absolute right-2 top-3 text-gray-400' />
                        </div>
                    </div>
                    <button onClick={signUp} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Sign Up</button>
                </form>
                <p className='my-4'>Already have an account? <Link className='text-accent' to={'/signin'}> Sign in</Link></p>


                <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl ' onClick={signInWithGoogle}>Sign in with Google</button>
                <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl ' onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Signup