const Posts = () => {
    return (
        <div>
            {/* Header */}
            <div className="flex items-center p-5 ">
                <div className="h-12 w-12 rounded-full object-contain border p-1 mr-3"/>
                <div className="h-14 w-4 bg-gray-300 rounded-md"/>
                <div className="h-4 w-5 bg-gray-300 rounded-full"/>
            </div>

            {/* Img */}
            <img 
                src={img} 
                className="object-cover w-full"
                alt="post-img"
            />
            {/* Buttons */}
            <div className="flex justify-between px-4 pt-4">
                <div className="flex space-x-4">
                    <div className="h-4 w-5 bg-gray-300 rounded-full"/>
                    <div className="h-4 w-5 bg-gray-300 rounded-full"/>
                    <div className="h-4 w-5 bg-gray-300 rounded-full"/>
                </div>
                <div className="h-4 w-5 bg-gray-300 rounded-full"/>
            </div>

            {/* Caption */}
            <p className="p-5 truncate">
                <div className="h-14 w-4 bg-gray-300 rounded-md"/>
                <div className="h-14 w-6 mt-2 bg-gray-300 rounded-md"/>
            </p>
        
            {/* Comments */}
            
            {/* Input Box */}
            <form className="flex items-center p-4">
                <div className="h-5 w-5 bg-gray-300 rounded-full"/>
                <div className="flex-1 h-4 bg-gray-300 rounded-md"/>
                <div className="h-4 w-14 bg-gray-300 rounded-md"/>
            </form>
        </div>
    )
}

export default Posts
