



const ChatUser = () => {
    return (
        <>
           <div className="flex items-center justify-center h-20 bg-gray-800 hover:bg-gray-700">
           <div className="avatar avatar-online">
           <div className="w-24 rounded-full">
           <img src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" alt="" className="w-[70px] h-[70px] rounded-full" />
           <div className="flex flex-col">
           </div>
             </div>
           </div>
           <div>
            <h1 className="text-xl font-bold">Manish</h1>
            <span className="text-sm">Offline</span>
           </div>
           </div>
        </>
    )
}
export default ChatUser