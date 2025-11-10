"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { CiShoppingBasket, CiUser, CiLocationOn, CiTimer, CiPhone, CiMail } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import SearchInput from "./SearchInput";
import HeartElement from "./HeartElement";
import { user } from "@prisma/client";
import NotificationBell from "./NotificationBell";
import ThemeToggle from "./ThemeToggle"; // Added import for ThemeToggle
import { useRef } from "react"; // Import useRef
import { Session } from "next-auth"; // Import Session type

interface HeaderProps {
  user: user | null;
}

const HEADER_TOP_HEIGHT = 0; // Approximate height of the top bar in pixels

const Header = ({ user }: HeaderProps) => {
  const { data: session } = useSession() as { data: Session | null };
  const router = useRouter();
  const pathname = usePathname();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown container

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { // When scrolled past the top bar height
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]); // Add dropdownRef to dependencies

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full z-50 fixed top-0 transition-all duration-300">
      {/* Main Header Section */}
      <div className={`w-full transition-all duration-300 ${isSticky ? 'bg-black/80 shadow-lg py-2 backdrop-blur-md' : 'bg-transparent py-4'}`}
           style={{ top: '0px' }}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-white font-['Forum']">
              <span className="text-yellow-500">Next</span>
              <span className="text-white">Shop</span>
            </h1>
          </Link>

          {/* E-commerce Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <SearchInput />
            </div>
            {session?.user?.role === "ADMIN" && (
              <Link href="/admin" className="text-white hover:text-yellow-500 transition-colors duration-200">
                <LuLayoutDashboard size={24} />
              </Link>
            )}
            {user && <NotificationBell />}

            {session?.user ? (
              <div className="relative" ref={dropdownRef}> {/* Added ref here */}
                <div
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-yellow-500"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown on click
                >
                  <CiUser size={24} />
                  <span className="hidden lg:block">{session.user.name}</span>
                </div>
                <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 dark:bg-gray-800 ${isDropdownOpen ? 'block' : 'hidden'}`}> {/* Controlled by state */}
                  {user?.role === "ADMIN" && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      <LuLayoutDashboard />
                      Admin
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      signOut();
                      setIsDropdownOpen(false); // Close dropdown on logout
                    }}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    <IoIosLogOut />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-yellow-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2"
                >
                  <CiUser size={24} />
                  <span className="hidden lg:block">Login</span>
                </Link>
                <Link
                  href="/register"
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-yellow-500 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2"
                >
                  <span className="hidden lg:block">Register</span>
                </Link>
              </div>
            )}

            <ThemeToggle /> {/* Added ThemeToggle component */}
            <HeartElement wishQuantity={wishlist.length} />

            <Link href="/cart" className="relative text-white hover:text-yellow-500">
              <CiShoppingBasket size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;