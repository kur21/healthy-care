const Button = ({type, title, handleClick}) => {
  return (
    <button
      type={type || 'button'}
      className="px-1 py-3 text-center min-w-[296px] bg-gradient text-light rounded-md hover:opacity-80 transition duration-300"
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
export default Button