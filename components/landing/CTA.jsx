import Link from "next/link"

const CTA = () => {
  return (
    <div className="mt-6 w-full purple-gradient-card p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:p-16">
      <div className="bg-white rounded-xl gap-4 lg:justify-between m-auto flex flex-col items-center text-center lg:p-8 p-8">
        <h2 className="w-full">Build Your Portfolio in Minutes</h2>
        <p className=" mt-4 lg:mt-0 lg:ml-6 max-w-[500px]">
            Start building your portfolio and showcase your work to the world.
        </p>
        <button className="px-6 py-3 whitespace-nowrap hover:shadow-lg hover:shadow-purple-900">
            <Link href="/templates">
            Create Your Portfolio Now
            </Link>
        </button>
      </div>
    </div>
  )
}

export default CTA