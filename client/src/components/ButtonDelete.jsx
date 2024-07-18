import edit from '../assets/images/edit.svg'

function ButtonDelete() {
  return (
    <button type="submit" className='bg-white border-2 border-black'>
        <img src={edit} alt="modifier" className="w-6"/>
    </button>
  )
}

export default ButtonDelete