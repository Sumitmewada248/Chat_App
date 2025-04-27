import { FaSearch } from "react-icons/fa";


const Search = () => {
    return (
        <>
        
        <div className="px-6 py-4 ">
            <form action="">
                <div className="flex space-x-3">
            <label className="border-[1px] rounded-1g p-3 border-gray-700 bg-slate-900 flex items-center gap-2 w-[80%]">

  <input type="text" className="grow outline-none" required placeholder="Search" />
</label>

<button><FaSearch className="text-5xl p-2 hover:bg-gray-600  rounded-full" /></button>
</div>

            </form>
        </div>
        </>
    )
}
export default Search