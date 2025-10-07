import {useState , forwardRef} from 'react'

export function InputBox ({label,placeholder,type , onChange }) {
    const [input,setInput] = useState("") ;
    return <div>
        <div className="text-sm font-medium text-left py-2">{label}</div>
        <input className="border rounded-md w-full px-2 py-1"
         type={type} placeholder={placeholder} onChange={onChange}/>
    </div>

}