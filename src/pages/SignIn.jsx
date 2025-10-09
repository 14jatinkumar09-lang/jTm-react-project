import axios from 'axios'
import { useState, useRef } from 'react'
import { Heading } from '../components/Heading.jsx'
import { SubHeading } from '../components/SubHeading.jsx'
import { InputBox } from '../components/InputBox.jsx'
import { Button } from '../components/Button.jsx'
import { BottomWarning } from '../components/BottomWarning.jsx'
import { useNavigate } from 'react-router-dom';
import { PasswordToggle } from '../components/PasswordToggle.jsx'
import {url} from '../url.js'

export function SignIn() {

    const navigate = useNavigate();
    const [userId, setUserId] = useState();
    const [password, setPassword] = useState();
    return <div className='max-w-sm border-white shadow-md p-2 '>
        <Heading label={"Sign in"}></Heading>
        <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
        <InputBox onChange={(e) => {
            setUserId(e.target.value);

        }} label={"Email"} placeholder={"jatin@gmail.com"} type="text" />
        <InputBox onChange={(e) => {
            setPassword(e.target.value);
        }} label={"Password"} placeholder={"123Abc"} type="text"></InputBox><PasswordToggle />
        <Button onClick={async () => {
            try {
                let res = await axios.post(`${url}/signin`, {
                userId,
                password
            })
               if (res.status===404) {
                 localStorage.setItem('token', res.data.token);
                localStorage.setItem('userName', res.data.username);
                navigate("/home");
            }
                
            }//try
                catch (error) {
                    if(error.response.status === 404 ) {
                alert(response.data.msg);
                        
                    }
                }
            
        
            
            // else {
                
            // }
            

            

        }} label={"Sign in"}></Button>
        <BottomWarning label={"Dont have an account?"} buttonText={"Sign up"} to={"/signup"} />
    </div>
}
