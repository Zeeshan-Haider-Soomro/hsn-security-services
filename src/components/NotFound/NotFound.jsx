import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-20 bg-gray-50 flex items-center justify-center p-6 min-h-[70vh]">
      <div className="w-full max-w-5xl grid md:grid-cols-2 shadow-2xl rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white">
        {/* RIGHT (Mobile order last): Illustration / Branding */}
        <div className="bg-[#0A1A44] text-white flex flex-col items-center justify-center p-12 gap-6 order-last md:order-none relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A13A32]/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

          <div className="w-32 h-32 rounded-3xl grid place-items-center bg-gradient-to-br from-[#E1B54622] to-[#A13A3220] border border-[#E1B54633] shadow-2xl relative z-10">
            <span className="text-5xl font-black text-[#E1B546] drop-shadow-lg">404</span>
          </div>
          <p className="text-center text-white/70 max-w-xs font-medium relative z-10 leading-relaxed">
            The surveillance perimeter was breached. The page you seek has been moved or deactivated.
          </p>
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-8 h-[1px] bg-white"></div>
            <p className="text-[10px] uppercase tracking-widest font-black">HSN Perimeter Secure</p>
            <div className="w-8 h-[1px] bg-white"></div>
          </div>
        </div>

        {/* LEFT: Content */}
        <div className="p-12 flex flex-col justify-center gap-6">
          <div className="inline-flex items-center gap-2 bg-[#A13A32]/10 px-5 py-2 rounded-full text-[#A13A32] font-black text-xs uppercase tracking-widest w-max">
            <span>🛡️</span> Security Alert
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#0A1A44] leading-[0.9] uppercase tracking-tighter">
            Lost <br /><span className="text-[#A13A32]">Guard</span>
          </h1>

          <p className="text-lg text-gray-500 font-medium max-w-md leading-relaxed">
            Don't worry — our security team is always alert. Let's get you back inside the secure zone.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="bg-[#0A1A44] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-[#A13A32] transform hover:-translate-y-1 transition-all duration-300 text-center"
            >
              Return to Base
            </Link>

            <Link
              to="/contact"
              className="border-2 border-gray-100 text-[#0A1A44] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-gray-50 transition-all duration-300 text-center"
            >
              Contact HQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
