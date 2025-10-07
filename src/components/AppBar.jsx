import { useNavigate} from 'react-router-dom' ;

export function AppBar({appName , userName , msg}) {
    const navigate = useNavigate() ;
    return <div className="flex justify-between p-3 border">
        <div className="font-medium">{appName}</div>
        <div className="flex justify-between font-semibold font-sans">
            <div className="mx-3">{msg}</div>
            <button onClick={()=>{
                navigate("/updateProfile") ;
            }} className="bg-blue-200 rounded-full border-lg shadow w-7 h-7 flex justify-center align-middle "><div>{userName[0]}</div></button>
            <button onClick={()=>{
                navigate("/signin") ;
                localStorage.clear() ;

            }} className="mx-2 bg-red-400 rounded-md p-1">Log Out</button>
        </div>
    </div>
}

export function UserCatalog({firstName,lastName,to}) {
    const navigate = useNavigate() ;
    return <div >
        <button className="flex " onClick={()=>{
            localStorage.setItem("sendingMoneyTo",to) ;
            localStorage.setItem("firstName",firstName) ;
            localStorage.setItem("lastName",lastName) ;
            navigate("/sendMoney") ;
        }}>
        <div className="w-7 h-7 mx-3 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-medium">{firstName[0]}</div>
        <div>{firstName+" " +lastName}</div>
        </button>
        </div>
    
}