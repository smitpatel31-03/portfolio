import React from 'react';
import { Link } from 'react-router-dom'; // corrected import

function Header() {
    const navbar = [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about-me" },
        { name: "My Works", path: "/my-works" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <header className="w-full bg-[#030304]/50 border-t-2 border-blue-500">
            <div className="max-w-[1140px] h-[47px] mx-auto flex items-center justify-between px-4 text-white">
                <div className="text-xl font-bold tracking-wider">
                    SM<span className="text-blue-500">I</span>T
                </div>
                <nav className="flex items-center gap-6 text-sm font-light">
                    {navbar.map((item, index) => (
                        item.name !== "Contact" ?
                            <Link key={index} to={item.path} className="hover:text-blue-400 transition">
                                {item.name.toUpperCase()}
                            </Link> :
                            <Link key={index} to={item.path}>
                                <button className="border border-white px-4 py-1 rounded-full text-white hover:bg-white hover:text-black transition">
                                    CONTACT
                                </button>
                            </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;