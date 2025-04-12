import { useEffect } from 'react';
import { Menu, EllipsisVertical } from 'lucide-react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return(
        <nav className="fixed top=0 w-full z-40 bg-[#121212] backdrop-blur-lg border-white/10 shadow-md shadow-[#FCD36C]/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="#home" className="font- text-2xl font-bold text-[#FCD36C] hover:text-[#FFBE5E] transition duration-300">
                        Sangeetha <span className="text-xs text-amber-50">| CSE Student</span>
                    </a>

                    {/* Mobile Menu */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        <Menu />
                    </div>

                    {/* desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>Home</a>
                        <a href="#about" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>About</a>
                        <a href="#resume" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>Resume</a>
                        <a href="#skills" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>Skills</a>
                        <a href="#projects" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>Projects</a>
                        <a href="#contact" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'>Contact</a>
                        <a href="#more" className='text-amber-50 text-lg hover:text-[#FCD36C] transition-colors'><EllipsisVertical /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}