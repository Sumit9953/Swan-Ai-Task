
const SuggestBox = (props) => {
  // eslint-disable-next-line react/prop-types
  const { suggestion} = props;
  
  return (
    <div className='border-2 px-5 py-2 border-gray-600'>
        <h1>{suggestion}</h1>
    </div>
  )
}

export default SuggestBox