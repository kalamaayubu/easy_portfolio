import GoogleAuthBtn from "@/components/auth/GoogleAuthBtn"
import Image from "next/image"

const AuthenticationPage = ({ searchParams }) => {
  const fromTemplate = searchParams?.from_template;
  return (
    <div className="flex min-h-screen bg-white">
    <div className="flex flex-col max-w-[550px] m-auto w-[80%] bg-white rounded-lg sm:p-8 p-6 border">
        <div className="flex gap-2 items-center m-auto whitespace-nowrap">
            <Image width={1000} height={1000} alt="google logo" src={'/assets/EP.png'} className="w-12"/>
            <h1 className=" md:text-[32px] lg:text-[34px] text-[28px] sm:text-3xl -translate-y-1">Easy portfolio</h1>
        </div>
        <p className="text-center text-gray-500">Please log in to proceed</p>
        <GoogleAuthBtn fromTemplate={fromTemplate}/>
        <div className="flex gap-3 items-center m-auto mt-4">
            <div className="size-2 rounded-full bg-black"/>
            <div className="size-2 rounded-full bg-red-700"/>
            <div className="size-2 rounded-full bg-green-700"/>
        </div>
    </div>
    </div>
  )
}

export default AuthenticationPage