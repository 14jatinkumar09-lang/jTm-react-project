import{useState}  from 'react'
import {Heading} from '../components/Heading.jsx'
import {SubHeading} from '../components/SubHeading.jsx'
import {InputBox} from '../components/InputBox.jsx'
import {Button} from '../components/Button.jsx'
import {BottomWarning} from '../components/BottomWarning.jsx'
import axios from 'axios'
import {url} from '../url.js'
import { useNavigate} from 'react-router-dom' ;
export function SignUp() {
    const [lastName,setLastName] = useState("") ;
    const [firstName,setFirstName] = useState("") ;
    const [userId,setEmail] = useState("") ;
    const [password,setPassword] = useState("") ;
    const navigate = useNavigate() ;

    return <div className='max-w-sm border-white shadow-md p-2 '>
        
        <Heading label={"Sign up"}></Heading>
        <SubHeading label={"Enter your information to create an account"}></SubHeading>
        <InputBox onchange={(element)=>{
            setFirstName(e.target.value) ;
        }} label={"First Name"} placeholder={"John"} type={"text"} />
        <InputBox onChange={(e)=> {
            setLastName(e.target.value) ;
        }} label={"Last Name"} placeholder={"Doe"} type={"text"}/>
        <InputBox onChange={(e)=>{
            setEmail(e.target.value) ;
        }} label={"Email"} placeholder={"paytm@gmail.com"} type={"text"}/>
        <InputBox onChange={(e)=>{
            setPassword(e.target.value) ;
        }} label={"Password"} placeholder={"Abc1234"} type={"text"} />
        <Button onClick={async ()=>{
           let response = await axios.post(`${url}/signup` , {
                userId ,
                firstName ,
                lastName ,
                password 
            })
            console.log(response.data.msg) ;
            
            navigate("/signin") ;
        }} label={"Sign up"}></Button>
        <BottomWarning label={"already have an account? "}buttonText={"sign in"} to={"/signin"} ></BottomWarning>
    </div>
}