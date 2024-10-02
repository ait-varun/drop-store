import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-scree fixed z-50 top-0 left-0 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
        <div className="relative">
          <h1 className="text-9xl font-bold mb-4 animate-pulse">404</h1>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-9xl animate-ping opacity-75">?</span>
          </div>
        </div>
        <p className="text-2xl font-bold mb-8 animate-bounce">
          Oops! Page not found
        </p>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-tilt">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 rounded-lg animate-gradient"></div>
          </div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center overflow-hidden">
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-300 group-hover:to-blue-300 font-bold transition-all duration-300 ease-in-out transform group-hover:scale-105">
              Beam Me Home, Scotty!
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
