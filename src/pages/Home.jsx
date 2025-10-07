 import { AppBar, UserCatalog} from '../components/AppBar.jsx'
 import { RecoilRoot, useRecoilValue } from 'recoil' ;
 import {currentBalance}  from '../store/Atoms.jsx'
 import {useEffect,useState} from 'react'
 import axios from 'axios'
 import {url} from '../url.js'
 
 export function Home () {
    const Balance = useRecoilValue(currentBalance) ;
    const [input , setInput] = useState() ;
    const [users,setUsers] = useState([]) ;

    useEffect(()=> {
        if(input == "" ) {
                    setInput("jgfhfghfhgdkhfskjdfkjk") ;
                }
            async function fetchData() {
                 console.log("initial value",users);
                let res = await axios.get(`${url}/userSearch?filter=${input}`)
              console.log("after fetching from backend",users);
                setUsers(res.data.user) ;
            }
        fetchData() ;
        },[input])

    return <div>
        
        


        <AppBar appName={"PayTM App"} userName={localStorage.getItem("userName")} msg={"Hello"}></AppBar>
        <div className='mx-5 my-4 font-semibold flex w-13'>Your Balance :- Rs<div className='font-medium mx-2'>{Balance}</div></div>        
        <div className="mx-5 my-4">
            <div className="font-semibold my-4">Users</div>
            <input className="border w-full rounded px-2 text-sm" type="text" placeholder="Search users..." onChange={(e)=>{
                setInput(e.target.value.trim()) ;
                
            }} />
            </div>
            <RenderUsers users={users}></RenderUsers>
</div>
 }
 

 function RenderUsers({users}) {
return (
    <>
    {users.map((user)=>{
        return <UserCatalog firstName={user.firstName} lastName={user.lastName} to={user.username}/>
    })}
 
    </>
)
}