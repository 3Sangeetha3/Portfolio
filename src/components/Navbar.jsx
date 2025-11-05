import { useEffect } from 'react';
import { Menu, EllipsisVertical } from 'lucide-react';
import { DropdownMenu } from './DropdownMenu';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return(
        <nav className="fixed top-0 w-full z-40 bg-[#121212] backdrop-blur-lg border-white/10 shadow-md shadow-[#FCD36C]/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font- text-2xl font-bold text-[#FCD36C] hover:text-[#FFBE5E] transition duration-300">
                        Sangeetha <span className="text-xs text-amber-50">| CSE Student</span>
                    </a>

                    {/* Mobile Menu */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        <Menu />
                    </div>

                    {/* Desktop - Only show dropdown menu, main nav moved to bottom */}
                    <div className="hidden md:flex items-center">
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </nav>
    )
}