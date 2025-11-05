import React from 'react';
import { Home, User, FileText, Code, Briefcase, Mail } from 'lucide-react';

export const BottomNavigation = () => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', href: '#home' },
        { id: 'about', icon: User, label: 'About', href: '#about' },
        { id: 'resume', icon: FileText, label: 'Resume', href: '#resume' },
        { id: 'skills', icon: Code, label: 'Skills', href: '#skills' },
        { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
        { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            {/* Desktop Liquid Glass Navigation */}
            <div className="hidden md:block">
                <div className="liquid-glass-nav flex items-center space-x-2 px-6 py-3">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.href)}
                                className="nav-item group flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10"
                            >
                                <IconComponent 
                                    size={20} 
                                    className="text-white/80 group-hover:text-[#FCD36C] transition-colors duration-300" 
                                />
                                <span className="text-xs text-white/70 group-hover:text-[#FCD36C] transition-colors duration-300">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Liquid Glass Navigation */}
            <div className="md:hidden">
                <div className="mobile-liquid-glass-nav flex items-center justify-center space-x-1 px-3 py-2">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.href)}
                                className="nav-item group flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 flex-1 min-w-0"
                            >
                                <IconComponent 
                                    size={16} 
                                    className="text-white/80 group-hover:text-[#FCD36C] transition-colors duration-300 flex-shrink-0" 
                                />
                                <span className="text-[9px] text-white/70 group-hover:text-[#FCD36C] transition-colors duration-300 text-center leading-tight">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
