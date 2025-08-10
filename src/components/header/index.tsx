"use client";
import { Fragment, useEffect, useState } from "react";
import NoloopsLogo from "../noloops-logo";
import { cn } from "@/lib/utils";
import PrimaryMenu, { PRIMARY_MENU } from "./primary-menu";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLogoChange, setIsLogoChange] = useState<boolean>(false);
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsLogoChange(true);
      } else {
        setIsLogoChange(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLogoChange]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Fragment>
      <header
        className={cn(
          "flex justify-between py-2 shadow-lg items-center w-full md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto text-white px-4 md:px-10 rounded-4xl absolute z-50 top-4 transition-all duration-700 ease-out",
          !isVisible && "-translate-y-20 opacity-0",
          isVisible && "translate-y-0 sticky top-4 opacity-100"
        )}
      >
        {/* Glassmorphism Background */}
        <div
          className="absolute inset-0 bg-left bg-no-repeat overflow-clip rounded-4xl backdrop-blur-md"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        />

        {/* Header Content */}
        <div className="relative z-10 flex justify-between items-center w-full">
          <NoloopsLogo
   variant="default"
            // variant={isLogoChange ? "white" : "default"}


            className="h-auto"
          />
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <PrimaryMenu />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <Button
            variant="default"
            className="hidden md:flex bg-blue-500 cursor-pointer justify-center items-center px-1.5 group font-semibold text-base hover:scale-105 transition-all ease-in-out hover:bg-blue-600 rounded-4xl"
          >
            Get in touch
            <ArrowUpRight className="group-hover:animate-bounce" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-b-2xl backdrop-blur-md bg-black/70 border-t border-gray-700 z-50">
            <nav className="flex flex-col space-y-4">
              {PRIMARY_MENU.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href} 
                  className="text-white hover:text-blue-400 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                variant="default"
                className="bg-blue-500 cursor-pointer flex justify-center items-center px-1.5 group font-semibold text-base hover:scale-105 transition-all ease-in-out hover:bg-blue-600 rounded-4xl w-full mt-2"
              >
                Get in touch
                <ArrowUpRight className="group-hover:animate-bounce" />
              </Button>
            </nav>
          </div>
        )}
      </header>
    </Fragment>
  );
}

export default Header;
