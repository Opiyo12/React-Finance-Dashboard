import React from 'react'

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 text-blue-500 flex  items-center justify-center ">
          <div className="w-8 h-8 mb-3 border-4 border-blue-400 border-t-transparent border-dotted rounded-full animate-spin"></div>
         
     </div>
  )
}

export default Loading