import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 shadow-xl rounded-2xl overflow-hidden">
        {/* RIGHT: Illustration / Branding */}
        <div className="bg-[#0A1A44] text-white flex flex-col items-center justify-center p-10 gap-6 order-last md:order-none">
          <div className="w-28 h-28 rounded-2xl grid place-items-center bg-gradient-to-br from-[#E1B54622] to-[#A13A3220] border border-[#E1B54633] shadow-xl">
            <span className="text-4xl font-extrabold text-[#E1B546] drop-shadow">404</span>
          </div>
          <p className="text-center text-white/90 max-w-xs">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <p className="text-xs text-white/60">Security Guards Protection</p>
        </div>

        {/* LEFT: Content */}
        <div className="bg-white p-10 flex flex-col justify-center gap-4">
          <div className="inline-flex items-center gap-2 bg-[#0A1A440D] px-4 py-2 rounded-full text-[#0A1A44] font-semibold text-sm w-max">
            <span>⚠️</span> Page Not Found
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A1A44] leading-tight">
            Lost <span className="text-[#A13A32]">Guard</span>
          </h1>

          <p className="text-base text-black opacity-80 mt-2 max-w-md">
            Don't worry — our security team is always alert. Let's get you back to safety.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/"
              className="bg-[#0A1A44] text-white px-5 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition transform"
            >
              Go Home
            </a>

            <a
              href="/contact"
              className="border-2 border-[#0A1A4415] text-[#0A1A44] px-5 py-3 rounded-xl font-semibold hover:bg-[#0A1A440a] transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
