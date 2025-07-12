
const TemplateLoadingAnimation = () => {
return (
    <div className="flex flex-col gap-8 w-[95%] m-auto p-4">
        <section className="flex justify-between mb-10 items-center gap-4">
          <div className="bg-gray-200 animate-pulse w-1/3 h-12 rounded-lg"/>
          <div className="bg-gray-200 animate-pulse w-1/2 h-12 rounded-lg"/>
          <div className="bg-gray-200 animate-pulse size-8 md:size-10 rounded-full"/>
          <div className="bg-gray-200 animate-pulse size-8 md:size-10 rounded-full"/>
        </section>

        <section className="flex-col flex md:flex-row gap-4 items-center justify-between">
          <div className="w-[80%] md:w-1/2 flex flex-col">
            <div className="bg-gray-200 animate-pulse rounded-lg w-full h-60 mb-2"/>
            <div className="flex gap-2 justify-between">
              <div className="bg-gray-200 animate-pulse size-16 rounded-full"/>
              <div className='w-full flex flex-col gap-2'>
                <div className=" bg-gray-200 animate-pulse h-8 rounded-full"/>
                <div className=" bg-gray-200 animate-pulse h-8 rounded-full"/>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 animate-pulse h-60 w-3/4 md:w-1/3 mt-20"/>
        </section>

        <section className="flex flex-col gap-4 mt-20 w-full">
            <div className='max-w-[800px] flex items-center gap-2 m-auto'>
                <div className='bg-gray-200 animate-pulse size-10 md:size-12 rounded-full'/>
                <div className='bg-gray-200 animate-pulse size-10 md:size-12 rounded-full'/>
                <div className='bg-gray-200 animate-pulse size-10 md:size-12 rounded-full'/>
                <div className='bg-gray-200 animate-pulse size-10 md:size-12 rounded-full'/>
            </div>
            <div className='bg-gray-200 animate-pulse h-60 w-full'/>
        </section>
    </div>
  )
}

export default TemplateLoadingAnimation