import cross from '../assets/images/Cross.svg'

function ButtonUpdate() {
  return (
    <button type="button" className='bg-white border-2 border-black'>
        <img src={cross} alt="modifier" className="w-6"/>
    </button>
  )
}

export default ButtonUpdate