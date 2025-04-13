import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#131313] text-white border-t border-[#949494]">
      <div className="max-w-[1483px] h-[740px] mx-auto px-6 py-10 flex flex-col justify-between">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-wider">AAR<span className="text-[#F9A142]">O</span>NN</h2>
            <p className="text-sm text-[#C4C4C4] leading-relaxed">
              A portfolio that blends code and creativity. Showcasing clean UI, meaningful UX, and real-world projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-[#F9A142] font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-[#C4C4C4]">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about-me" className="hover:text-white">About Me</a></li>
              <li><a href="/my-works" className="hover:text-white">My Works</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#F9A142] font-semibold mb-3">Social</h3>
            <ul className="space-y-2 text-sm text-[#C4C4C4]">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">Dribbble</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-[#F9A142] font-semibold mb-3">Stay Updated</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-3 rounded bg-[#949494] text-white placeholder:text-white/60"
            />
            <button className="bg-[#F9A142] text-black px-4 py-2 rounded hover:bg-[#e08b27] transition">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} AARONN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
