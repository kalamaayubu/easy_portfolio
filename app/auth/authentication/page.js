import GoogleAuthBtn from "@/components/auth/GoogleAuthBtn"
import Image from "next/image"

const AuthenticationPage = () => {
  return (
    <div className="flex min-h-screen bg-white sm:bg-gray-100">
    <div className="flex flex-col max-w-[600px] m-auto w-[80%] bg-white rounded-lg p-8 border sm:border-none sm:shadow-md">
        <div className="flex gap-2 items-center m-auto whitespace-nowrap">
            <Image width={1000} height={1000} alt="google logo" src={'/assets/EP.png'} className="w-12"/>
            <h1 className=" md:text-4xl text-3xl -translate-y-1">Easy portfolio</h1>
        </div>
        <p className="text-center text-gray-500">Please log in to proceed</p>
        <GoogleAuthBtn/>
        <div className="flex gap-3 items-center m-auto mt-4">
            <div className="size-2 rounded-full bg-black"/>
            <div className="size-2 rounded-full bg-black"/>
            <div className="size-2 rounded-full bg-black"/>
            <div className="size-2 rounded-full bg-black"/>
        </div>
    </div>
    </div>
  )
}

export default AuthenticationPage