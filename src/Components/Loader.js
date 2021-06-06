import React from 'react'

function Loader({handleSubmit, handleURLChange}){
    // const [valid, setValid] = useState(true)
    // function handleChangeSource(e){
    //     e.preventDefault();
    // }

   
    return(<form className="inline-flex focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" onSubmit={e => handleSubmit(e)}>
            <label>
                <span> Enter URL </span>
            </label>
            <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="URL"
                name="s"
                onChange={e => handleURLChange(e)}
            />
            </form>)
}

export default Loader;