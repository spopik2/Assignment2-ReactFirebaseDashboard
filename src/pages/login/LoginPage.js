import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {MdSportsHockey} from 'react-icons/md'
import {auth} from './../../libs/firebase'
import {BoxContainter,FormContainer,SubmitButton, FormContainerLeft, FormContainerRight, FormInputs} from './styles'
import './styles.css'

function LoginPage  (props){
    const navigator = useNavigate()
    const[email, setEmail] = useState('')
    const[password, setPassword]= useState('')

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    function onHandleSubmit(e){
    e.preventDefault();
        //send email and password to firebase to auth or show error
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental =>{
            //move to dashboard page
            //useNavigate()
            navigator('dashboard')

        })
        .catch(error => {
            
            notify(error)
        })
    }

    return( 
        <>
            <nav>
                {/* <ul>
                    <li><Link to="/">Login Page</Link></li>
                    <li><Link to="/dashboard">dashboard</Link></li>
                </ul> */}
            </nav>
            <header>
                <h1 className='nav-h1'>Steve's Sticks<MdSportsHockey color="#19CBFF" size={35}></MdSportsHockey></h1>
                <ToastContainer></ToastContainer>
            </header>
            <BoxContainter>
                <FormContainerLeft>
                    <img src='img/Bauer-Hocky.jpg' alt='Bauer Hockey' className='form-img'></img>
                </FormContainerLeft>
                <FormContainerRight>
                    <FormContainer onSubmit={onHandleSubmit}>
                            <h2 className='form-h2'>Welcome Back</h2>
                            <p className='form-p'>Steve's Sticks -  Get the Best deals on hockey Sticks</p>
                            <FormInputs>
                                <label className='form-label'>Email</label>
                                <input type="email" required placeholder='Email'  className='form-input' onChange={(e) => setEmail(e.target.value)}></input>
                            </FormInputs>
                            <FormInputs>
                                <label className='form-label'>Password</label>
                                <input type="password" required placeholder='Password' className='form-input' onChange={(e) => setPassword(e.target.value)}></input>
                            </FormInputs>
                        <SubmitButton type="submit">Log In</SubmitButton>
                    </FormContainer>
                </FormContainerRight>
            {/* <button onClick={onHandleClick}>Click Me</button> */}

            </BoxContainter>
        </>
    )
}

export default LoginPage 