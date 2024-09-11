'use client'
import { useState } from 'react';
import { signIn, } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const Form = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      const handleSignUp = async () => {
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match');
          return;
        }

        const result = await signIn('credentials', {
            redirect: false,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            confirmPassword:formData.confirmPassword
          });
          console.log(result,'result')
      
          if (!result?.ok) {
            console.log('account can"t create')
            console.log({result})
          } else {
            router.push('/signin');
            console.log('account created successfully of',formData.username)
          }
        };
    
  return (
    <>
    <div className='flex justify-center items-center pb-4'>
              <div>
                  <div className="pb-9 flex justify-center items-center bg-custom-color-heading ff-inter text-2xl font-semibold leading-9">Create Account</div>
                  <div className="flex space-x-8 pb-12 sm:flex justify-center items-center">
                      <button className="btn bg-custom-color-facebook-icon lg:h-20 lg:w-40 sm:w-24 md:w-24"onClick={() => signIn('facebook')}>
                        <Image className="h-6 w-6" src='/images/facebook_svgrepo.com.png'  height={20} width={20} alt=''></Image>
                          <span className="ff-inter font-semibold hidden lg:inline text-white">SignUp with Facebook</span>
                      </button>
                      <button className="border-custom btn bg-white lg:w-40 lg:h-20 sm:w-24 md:w-24"onClick={() => signIn('google')}>
                         <Image  className="h-6 w-6" src='/images/google-color_svgrepo.com.png'  height={20} width={20}  alt=''></Image>
                          <span className="ff-inter color-google-btn font-semibold hidden lg:inline">SignUp with Google</span>
                      </button>
                  </div>
                  <div className="pb-7">
                      <div className="flex items-center">
                          <div className="flex-grow bg-gray-400 h-px"></div>
                          <span className="px-3 text-gray-500">OR</span>
                          <div className="flex-grow bg-gray-400 h-px"></div>
                      </div>
                  </div>
                  <form  onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
                  <div className="pb-5">
                      <label className="form-control pb-6">
                          <div className="label">
                              <span className="label-text ff-inter font-medium text-base">Username <span className="text-sm text-red-500 font-extrabold">*</span></span>
                          </div>
                          <input type="text" name="username" value={formData.username} onChange={handleChange} required  className="input input-bordered flex items-stretch" />
                      </label>
                      <label className="form-control pb-6">
                          <div className="label">
                              <span className="label-text ff-inter font-medium text-base">Email address <span className="text-sm text-red-500 font-extrabold">*</span></span>
                          </div>
                          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input input-bordered flex items-stretch" />
                      </label>
                      <label className="form-control pb-6">
                          <div className="label">
                              <span className="label-text ff-inter font-medium text-base">Password <span className="text-sm text-red-500 font-extrabold">*</span></span>
                              
                          </div>
                          <label className="input input-bordered">
                              <div className="float-right mt-3">
                                <Image className="w-6 h-6" src='/images/ph_eye-light.png'  height={20} width={20} alt=''></Image>
                                </div>
                              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="flex items-stretch" />
                              
                          </label>
                      </label>
                      <label className="form-control">
                          <div className="label">
                              <span className="label-text ff-inter font-medium text-base">Confirm password <span className="text-sm text-red-500 font-extrabold">*</span></span>
                              
                          </div>
                          <label className="input input-bordered">
                              <div className="float-right mt-3">
                                <Image className="w-6 h-6" src='/images/ph_eye-light.png' height={20} width={20}  alt=''></Image>
                                </div>
                              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="flex items-stretch" />
                              
                          </label>
                      </label>
                  </div>
                      <div className="pb-3">
                          <button type="submit" className="btn w-full bg-custom-login-btn ff-inter text-white text-lg font-normal">Register</button>
                      </div>
                  </form>
                  <div className="grid grid-flow-col">
                  </div>
                  <div className="ff-inter font-medium text-sm flex justify-center items-center">
                    Already have an account ? <Link href={'/signin'}>Login</Link>
                  </div>
              </div>
          </div>
  </>
  )
}

export default Form
