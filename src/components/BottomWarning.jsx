import { useNavigate} from 'react-router-dom' ;

export function BottomWarning({label , buttonText , to}) {

    const navigate = useNavigate() ;

    return <div className="text-sm flex justify-center">
        <div className="mr-2">
            {label}
        </div>
        <button className="text-blue-700 cursor-pointer underline" onClick={()=>{
            navigate(to) ;
        }} >
          {buttonText}  
        </button>

    </div>
}