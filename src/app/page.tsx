import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900 text-white">
      <div className="flex flex-col items-center text-center space-y-6">
        <Image
          src="/images/logo.jpg"
          height={500}
          width={500}
          alt="logo"
          priority
          style={{
            mixBlendMode:"multiply",
            
          }}
          unoptimized
          className="animate-caret-blink"
        
        />
        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fadeIn animate-delay-2000">
          Our website is under construction. <br /> We're coming soon!
        </p>
      </div>
    </div>
  );
}
