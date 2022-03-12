import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

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
        <>
            <aside>
                <header>
                    <h1> 404 | Page Not Found</h1>
                    {
                        isUser?  <Link to='/dashboard'>Back to safety</Link>: <Link to='/'>Back to safety</Link>
                    }
                </header>
            </aside>
        </>
    )
}
export default PageNotFound 