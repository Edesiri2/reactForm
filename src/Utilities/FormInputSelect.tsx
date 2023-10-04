import {FC} from 'react'
interface FormInputSelectProps {
    placeholder : String;
    disabled : boolean
}

const FormInputSelect: FC<FormInputSelectProps> = ({placeholder, disabled}) => {
  return (
    <select disabled={disabled} className='w-80 lg:w-80 md:w-40  py-2 px-2  text-black border border-gray-400 hover:border-red-600' placeholder={String(placeholder)} name="title" required>
    <option value="">Title</option>
    <option value="Miss">Miss</option>
    <option value="Master">Master</option>
    <option value="Mr">Mr</option>
    <option value="Mrs">Mrs</option>
    <option value="Dr">Dr</option>
    <option value="Prof">Prof</option>
    <option value="Chief">Chief</option>
    <option value="Alhaji">Alhaji</option>
    <option value="Pastor">Pastor</option>
    <option value="Rev">Rev</option>
  </select>
  )
}


export default FormInputSelect