
// eslint-disable-next-line react/prop-types
const InputUser = ({setSearch}) => {
  return (
   <>
    <div className="group">
    <input required=""
        type="text"
        onChange={e => setSearch(e.target.value)}
        className="input"/>
    <span className="highlight"></span>
    <span className="bar"></span>
    <label>Search by name, city or email</label>
    </div>
   </>
  )
}

export default InputUser



