import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

import {Button} from'ui/buttons'
import PageNotFoundPic from 'assets/images/PageNotFound.png'

import {PageNotFoundStlyes, PageNotFoundFooter, PageNotFoundMessage, PageNotFoundh1} from './styles'
import './styles.css'


function PageNotFound  (props){
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
            //Login Page
            navigator('/')
        }
    })
    return( 
        <PageNotFoundStlyes>
                <PageNotFoundh1>Page Not Found</PageNotFoundh1>
                <PageNotFoundMessage>Error Code: 404</PageNotFoundMessage>
                    <img src={PageNotFoundPic} alt='Snoopy Penalty Box' className='pageNotFound-img'/>
                <PageNotFoundFooter>
                    <PageNotFoundMessage>Looks like the page you are looking for is in the penalty box.</PageNotFoundMessage>
                    {
                        isUser?  <Button bc="#2a2a2a" color='white'  onClick={()=> navigator('/dashboard')}>Back to Dashboard</Button> : <Button bc="#2a2a2a" color='white' onClick={()=> navigator('/')}>Back to Login Page</Button>
                    }
                </PageNotFoundFooter>
        </PageNotFoundStlyes>
    )
}
export default PageNotFound 