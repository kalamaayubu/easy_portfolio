
const TemplateLoadingAnimation = () => {
  return (
    <div className="flex flex-col gap-8 w-[95%] m-auto p-4">
        <div className="flex justify-between mb-10">
          <div className="bg-gray-300 animate-pulse w-1/5 h-8 rounded-lg"/>
          <div className="bg-gray-300 animate-pulse w-1/2 h-8 rounded-lg"/>
          <div className="bg-gray-300 animate-pulse size-10 rounded-full"/>
        </div>

        <div className="flex-col flex md:flex-row gap-4 items-center justify-between">
          <div className="w-[80%] md:w-1/2 flex flex-col">
            <div className="bg-gray-300 animate-pulse rounded-lg w-full h-60 mt-2"/>
            <div className="flex gap-2">
              <div className="bg-gray-300 animate-pulse rounded-full size-16"/>
              <div>
              <div className=" bg-gray-300 animate-pulse h-8 rounded-full mt-2"/>
              <div className=" bg-gray-300 animate-pulse h-8 rounded-full mt-2"/>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-300 animate-pulse h-40 w-40 rotate-12"/>
        </div>

        <div className="flex">

        </div>
    </div>
  )
}

export default TemplateLoadingAnimation