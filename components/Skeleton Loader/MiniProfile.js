const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10 animate-pulse">
            <div className="rounded-full border p-[2px] h-16 w-16 bg-gray-300"/>
            <div className="flex-1 mx-4">
                <div className="w-14 h-4 rounded-md bg-gray-300"/>
                <div className="w-24 h-4 rounded-md bg-gray-300 mt-2"/>
            </div>
            <div className="w-14 h-4 rounded-md bg-gray-300"/>
        </div>
    )
}

export default MiniProfile
