'use client';
import {useState,useEffect} from "react";
import { getAuth,RecaptchaVerifier,signInWithPhoneNumber,ConfirmationResult } from "firebase/auth";
import app from '../../../firebase'
import { useRouter } from "next/navigation";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('+91')
    const [otp, setOtp] = useState('')
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null); 
    const [otpSent, setOtpSent] = useState(false)
    const auth=getAuth(app)
    const router=useRouter()

    useEffect(()=>{
        window.recaptchaVerifier=new RecaptchaVerifier(auth,'recaptcha-container',{
            'size':'normal',
            'callback':(response:any)=>{

            },
            'expired-callback':()=>{

            }
        })
    },[auth])

    const handlePhoneNumberChange=(e:any)=>{
        setPhoneNumber(e.target.value)
    }
    const handleOtpChange=(e:any)=>{
        setOtp(e.target.value)
    }
    const handleSendOtp=async()=>{
        try{
          const formatedPhonenumber=`+${phoneNumber.replace(/\D/g,'')}`;
          const confirmation =await signInWithPhoneNumber(auth,formatedPhonenumber,window.recaptchaVerifier) 
          setConfirmationResult(confirmation);
          setOtpSent(true)
            alert('otp sent successfully')
        }catch(err){
            console.log(err)
        }
    }

    // const handleOtpSubmit=async ()=>{
    //     try{
    //         await confirmationResult.confirm(otp);
    //         setOtp('')
    //         router.push('/')
    //     }catch (err){
    //         console.log(err)
    //     }
    // }

    const handleOtpSubmit = async () => {
        try {
            if (confirmationResult) {  
                await confirmationResult.confirm(otp);
                setOtp('');
                router.push('/');
            } else {
                console.error('No confirmation result available.');
            }
        } catch (err) {
            console.log(err);
        }
    };
    
  return (
    <div>
        {!otpSent ? 
        (<div id="recaptcha-container"></div>):null}

        <input type="tel" required value={phoneNumber} onChange={handlePhoneNumberChange}
        placeholder="Enter number"
        className="border border-gray-500 p-2 rounded-md" />
        <input type="text" value={otp} onChange={handleOtpChange} 
        placeholder="enter otp"
        className="border border-gray-500 p-2 rounded-md"
        />
        <button onClick={otpSent?handleOtpSubmit:handleSendOtp}
        className={`bg-${otpSent?'green':'blue'}-500 text-white p-2 rounded`}
        style={{backgroundColor:otpSent?'green':'blue'}}
        >

            {otpSent?'submit otp':'send otp'}
        </button>
    </div>
  )
}

export default Login