import { IoSend } from "react-icons/io5";


const TypeSend = () => {
    return (
        <>
        <div className="flex space-x-3 h-[10vh] text-center bg-gray-800">
        <div className="w-[70%] px-6 py-4 ">
        <input type="text" placeholder="Type here" className="border border-gray-700 mt-1 px-4 py-2 outline-none w-full bg-black h-13" />
        </div>
        
        <button className="text-3xl cursor-pointer hover:bg-gray-600 backdrop-blur rounded-full h-20 "> <IoSend /></button>
       </div>

        </>
    )
}

export default TypeSend
