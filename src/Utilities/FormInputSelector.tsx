import {FC} from 'react'
interface FormInputSelectorProps {
    placeholder : String;
    defalt: String;
    firstOption: String;
    secondOption:String;
    disabled : any;

}
const FormInputSelector: FC<FormInputSelectorProps> = ({placeholder,disabled,defalt, firstOption, secondOption}) => {
  return (
    <select disabled = {disabled} className='w-80 lg:w-80 md:w-40 py-2 px-2  text-black border border-gray-400 hover:border-red-600' placeholder={String(placeholder)} name="gender" required>
    <option value="">{defalt}</option>
    <option value="Male">{firstOption}</option>
    <option value="Female">{secondOption}</option>
    
  </select>
  )
}


export default FormInputSelector