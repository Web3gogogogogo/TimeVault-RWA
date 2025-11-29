import React from 'react';
import { Menu, X, Wallet, Globe } from 'lucide-react';
import logoImg from 'figma:asset/ee2a757a5b583e6c294c215ef08d58d70e1f725c.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("简体");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-[#F9F7F2]/90 backdrop-blur-lg border-b border-stone-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={logoImg} alt="陈皮纪元 Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xl font-bold text-stone-900">陈皮纪元</div>
              <div className="text-[10px] text-stone-500 tracking-widest uppercase">TimeVault RWA</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">白皮书</a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">审计报告</a>
            <a href="#" className="text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide">社区</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-stone-600 hover:text-stone-900 transition-colors text-sm tracking-wide outline-none">
                <Globe size={16} />
                <span>{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur border-stone-200">
                <DropdownMenuItem onClick={() => setLanguage("简体")} className="cursor-pointer hover:bg-stone-100 focus:bg-stone-100">
                  简体中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("繁体")} className="cursor-pointer hover:bg-stone-100 focus:bg-stone-100">
                  繁體中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("EN")} className="cursor-pointer hover:bg-stone-100 focus:bg-stone-100">
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all text-sm font-bold flex items-center space-x-2">
              <Wallet size={16} />
              <span>进入 DAPP</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-stone-200">
            <a href="#" className="block text-stone-600 hover:text-stone-900 transition-colors text-lg">白皮书</a>
            <a href="#" className="block text-stone-600 hover:text-stone-900 transition-colors text-lg">审计报告</a>
            <a href="#" className="block text-stone-600 hover:text-stone-900 transition-colors text-lg">社区</a>
            
            <div className="flex items-center space-x-4 py-2">
               <span className="text-stone-500">语言:</span>
               <button onClick={() => setLanguage("简体")} className={`px-2 py-1 rounded ${language === "简体" ? "bg-stone-200 text-stone-900" : "text-stone-500"}`}>简</button>
               <button onClick={() => setLanguage("繁体")} className={`px-2 py-1 rounded ${language === "繁体" ? "bg-stone-200 text-stone-900" : "text-stone-500"}`}>繁</button>
               <button onClick={() => setLanguage("EN")} className={`px-2 py-1 rounded ${language === "EN" ? "bg-stone-200 text-stone-900" : "text-stone-500"}`}>EN</button>
            </div>

            <button className="w-full px-5 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-all font-bold flex items-center justify-center space-x-2">
              <Wallet size={18} />
              <span>进入 DAPP</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
