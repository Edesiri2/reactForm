import {FC} from 'react'
interface FormIdSelectorProps {
    placeholder : String;
    defalt: String;
    firstOption: String;
    secondOption:String;
    thirdOption:String

}
const FormIdSelector: FC<FormIdSelectorProps> = ({placeholder,defalt, firstOption, thirdOption, secondOption}) => {
  return (
    <select className='w-80 lg:w-80 md:w-40 py-2 px-2  text-black border border-gray-400 hover:border-red-600' placeholder={String(placeholder)} name="gender" required>
    <option className=' text-gray-500' >{defalt}</option>
    <option >{firstOption}</option>
    <option >{secondOption}</option>
    <option>{thirdOption}</option>
    
  </select>
  )
}


export default FormIdSelector