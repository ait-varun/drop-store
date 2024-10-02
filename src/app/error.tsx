"use client";
import Link from "next/link";
interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="w-screen h-scree absolute top-0 left-0 z-50 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-screen w-full gap-6 bg-gradient-to-br from-red-100 to-red-200 p-4">
        <div className="relative">
          <h1 className="text-6xl sm:text-8xl font-bold text-red-700 animate-pulse">
            Error
          </h1>
          <div className="absolute -top-4 -left-4 w-full h-full flex items-center justify-center">
            <span className="text-7xl sm:text-9xl text-red-500 animate-ping opacity-20">
              !
            </span>
          </div>
        </div>
        <div className="w-full max-w-2xl max-h-48 overflow-auto bg-white/50 rounded-lg p-4 shadow-inner">
          <p className="text-lg sm:text-2xl font-bold text-red-600 break-words">
            {error.message}
          </p>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-tilt">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-lg animate-gradient"></div>
          </div>
          <button className="relative px-7 py-4 bg-white rounded-lg leading-none flex items-center">
            <Link
              href="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 group-hover:from-orange-500 group-hover:to-yellow-500 font-bold transition-all duration-300 ease-in-out transform group-hover:scale-105">
              Go Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
