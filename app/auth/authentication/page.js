import GoogleAuthBtn from "@/components/auth/GoogleAuthBtn"
import Image from "next/image"

const AuthenticationPage = ({ searchParams }) => {
  const fromTemplate = searchParams?.from_template;
  return (
    <div className="flex min-h-screen bg-white">
    <div className="flex flex-col max-w-[550px] m-auto w-[80%] bg-white rounded-lg sm:p-8 p-6 border">
        <div className="items-center m-auto flex mb-3">
          <Image
              src={"/assets/EP.png"}
              width={1000}
              height={1000}
              alt="Logo"
              className="w-10 -rotate-90"
          />
          <span className=" text-[18px] font-bold purple-gradient-text italic sm:flex">
              Easy Portfolio
          </span>
        </div>
        <p className="text-center text-gray-500">Please log in to proceed</p>
        <GoogleAuthBtn fromTemplate={fromTemplate}/>
        <div className="flex gap-3 items-center m-auto mt-4">
            <div className="size-2 rounded-full bg-black"/>
            <div className="size-2 rounded-full bg-purple-500"/>
            <div className="size-2 rounded-full bg-orange-600"/>
        </div>
    </div>
    </div>
  )
}

export default AuthenticationPage