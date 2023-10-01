import {FC} from 'react'
interface ButonProps {
  label: String
}
const Buton:FC<ButonProps> = ({label}) => {
  return (
   <button className=' bg-[#900000] p-1 text-white'>
    {label}
   </button>
  )
}

export default Buton