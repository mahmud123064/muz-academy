import { useContext, useState } from 'react';
import Lottie from "lottie-react";
import registerAnimation from '../../../../public/login.json'
import { useForm } from "react-hook-form";
// import useToast from '../../Hooks/useToast';
// import placeImage from '../../assets/upload.png'

import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
// import useAuth from '../../Hooks/useAuth';
// import Social from '../../Components/Social';
// import { updateProfile } from 'firebase/auth';
//Main function 
const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            updateUser(data.name, data.image)
            .then(()=> {
                console.log("user profile updated");
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/")
            })
            .catch(error => console.log(error))
        })

        // // console.log(data)
        // if (data.password.length <= 6) {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Password length must be more then 6 characters'
        //     })
        //     return
        // }
        // if (!/[A-Z]/.test(data.password)) {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Password Must be 1 uppercase'
        //     })
        //     return
        // }
        // if (!/[!@#\$%\^\&*_=+-]/.test(data.password)) {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Password Must be 1 Special Character'
        //     })
        //     return
        // }
        // if (data.password !== data.ConfirmPassword) {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Password & confirm password not matching'
        //     })
        //     return
        // }
        // if (data.image.length > 0) {
        //     const formData = new FormData()
        //     formData.append('image', data.image[0])

        //     const api = import.meta.env.VITE_imgbbApiKey
        //     if (data.image[0]) {

        //         await fetch(`https://api.imgbb.com/1/upload?key=${api}`, { method: 'POST', body: formData }).then(res => res.json()).then(imgData => {
        //             // console.log(imgData.data.display_url)

        //             if (imgData.data.display_url) {
        //                 // console.log(data);
        //                 createAccount(data.email, data.password)
        //                     .then(() => {
        //                         // console.log(data.displayName);

        //                         updateProfile(auth.currentUser, {
        //                             displayName: data.name,
        //                             photoURL: imgData.data.display_url
        //                         }).then(() => {
        //                             const user = {
        //                                 name: data.name,
        //                                 email: data.email,
        //                                 role: data?.role || 'Student'
        //                             }
        //                             fetch('https://summercampgs.vercel.app/user', {
        //                                 method: "POST",
        //                                 headers: { "Content-Type": "application/json" },
        //                                 body: JSON.stringify(user)
        //                             }).then(res => res.json()).then(uData => {
        //                                 // console.log(uData);
        //                                 navigate('/login')
        //                                 Toast.fire({
        //                                     icon: 'success',
        //                                     title: 'Registered successfully  Please Login Now if you are not logged in automatically '
        //                                 })
        //                             }).catch(err => {
        //                                 Toast.fire({
        //                                     icon: 'error',
        //                                     title: err.message
        //                                 })
        //                             })

        //                         }).catch((error) => {
        //                             Toast.fire({
        //                                 icon: 'error',
        //                                 title: error.message
        //                             })
        //                         });

        //                     }).catch(err => Toast.fire({
        //                         icon: 'error',
        //                         title: err.message
        //                     })
        //                     )
        //             }

        //         })
        //     }

        // }
    };


    // const handleImageChange = (e) => {
    //     const image = e.target.files[0]
    //     const imgLink = URL.createObjectURL(image)
    //     setImg(imgLink)

    // }
    return (
        <div className='MyContainer min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center gap-5'>
            <div data-aos="fade-left">
                <div className="h-[500px] w-full">
                    <Lottie className='h-full w-full' animationData={registerAnimation} loop={true} />
                </div>
            </div>
            <div className="divider mx-auto w-28 md:w-[2px] md:h-28 md:my-auto md:divider-horizontal bg-[#004d73]"></div>
            <div data-aos="fade-right" className='md:w-1/2 w-full text-center '>

                <form className='bg-base-100 rounded p-4 shadow' onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className=" form-control rounded-full -mt-2 w-full " >
                        {/* <div className='tooltip tooltip-open tooltip-left' data-tip="Upload Your Image">
                            <img title='Upload Your Image' className={img ? ' cursor-pointer mx-auto h-28 w-28 rounded-full -mt-2 border border-[#f55400] mb-2 ' : 'cursor-pointer mx-auto h-28 w-28 mb-2'} alt="" />
                        </div> */}
                        {/* <label className="label ">
                            <span className="label-text font-semibold ml-2">Your image*</span>
                        </label> */}



                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold ml-2">Your Full Name*</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Enter your Name" className="input -mt-2 rounded-full  border-[#004d73] input-bordered w-full" required />
                    </div>

                    <div className="form-control mb-2 w-full">
                        <label className="label">
                            <span className="label-text font-semibold ml-2">Your Email*</span>
                        </label>
                        <input {...register("email")} type="text" placeholder="Enter your Email" className="input input-bordered rounded-full -mt-2  border-[#004d73]  w-full" required />
                    </div>

                    {/* Password */}

                    <div className="form-control mb-2 w-full">
                        <label className="label">
                            <span className="label-text font-semibold ml-2">Password*</span>
                        </label>
                        <div className='relative'>
                            <input {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                })} type={show ? "text" : "password"} placeholder="Enter Your Password" className="input input-bordered rounded-full -mt-2  border-[#004d73]  w-full" />

                            {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                            {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                            {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>}

                            <p onClick={() => setShow(!show)} className='rounded-full -mt-2 hover:bg-slate-300 p-[15px] absolute right-px top-1/2 -translate-y-1/2'>{
                                show ? <FaEyeSlash /> : <FaEye />
                            }</p>

                            {/* ///////////////////// */}

                            {/* <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                })} name="password" placeholder="password" className="input input-bordered rounded-full -mt-2  border-[#004d73]  w-full" /> */}
                            {/* {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>} */}
                            {/* {errors.password && <span className="text-red-500">Password  is required</span>} */}

                            {/* {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                            {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                            {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>} */}
                        </div>
                    </div>

                    <div className="form-control mb-2 w-full">
                        <label className="label">
                            <span className="label-text font-semibold ml-2">Confirm Password*</span>
                        </label>

                        <div className='relative'>
                        <input {...register("confirmPassword",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                })} type={show ? "text" : "confirmPassword"} placeholder="Enter Your Password" className="input input-bordered rounded-full -mt-2  border-[#004d73]  w-full" />

                            {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                            {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                            {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>}

                            <p onClick={() => setShow(!show)} className='rounded-full -mt-2 hover:bg-slate-300 p-[15px] absolute right-px top-1/2 -translate-y-1/2'>{
                                show ? <FaEyeSlash /> : <FaEye />
                            }</p>
                        </div>
                    </div>

                    <div className='form-control mb-2 w-full'>
                        <label className="label">
                            <span className="label-text font-semibold ml-2">Upload your Image*</span>
                        </label>
                        <input type="file" className=" file-input file-input-bordered w-full border-[#004d73] rounded-full -mt-2" accept='image/*'   {...register("image")} required />

                        {/* <select required {...register("role", { required: true })} className="select select-bordered border-[#004d73] rounded-full -mt-2 w-full lg:w-1/2 "
                                defaultValue={"Student"}
                            >
                                <option>Student</option>
                            </select> */}
                    </div>

                    {/* Submit */}
                    <input className='btn rounded-full  text-white hover:bg-[#143341] border primary_bg   font-semibold w-[70%] md:w-[60%]' type="submit" value='Register' />
                </form>

                <p className='my-2'>If you have already an account?please <Link to={'/login'} className="text-[#0010f5] ">Login</Link> or Login With</p>
                {/* Social Media */}

                <div>
                    <button className='btn rounded-full w-[70%] md:w-[55%] hover:bg-[#143341] text-white primary_bg'><FaGoogle /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;