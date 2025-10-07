import { useNavigate} from 'react-router-dom' ;
export function Button ({label,onClick}) {
    
    return <div>
        <button className="shadow my-3 p-2 rounded-md bg-black w-full text-white font-serif"
       onClick={onClick}
       >{label}
        </button>
    </div>
}