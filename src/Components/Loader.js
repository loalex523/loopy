import React from 'react'

function Loader({handleSubmit, handleURLChange}){
    // const [valid, setValid] = useState(true)

    // function handleChangeSource(e){
    //     e.preventDefault();
    // }

   
    return(<form onSubmit={e => handleSubmit(e)}>
            <label>
                <span> Enter URL </span>
            </label>
            <input
                type="text"
                placeholder="URL"
                name="s"
                onChange={e => handleURLChange(e)}
            />
            </form>)
}

export default Loader;