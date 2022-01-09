const Suggestion = ({userImg, username}) => {
    return (
        <div className="flex items-center justify-between mt-3">
            <img 
                src={userImg} 
                className="w-10 h-10 rounded-full border p-[2px]"
                alt="user-img"
            />
            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{username}</h2>
                <h3 className="text-sm text-gray-400">Followed By...</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Follow</button>
        </div>
    )
}

export default Suggestion
