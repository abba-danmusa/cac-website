"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Correct hook for Next.js 13+
import Link from "next/link";

const Header = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
      <div className="main-nav-sub full-wrapper">
        {/* Logo */}
        <div className="nav-logo-wrap local-scroll" data-aos="fade-down">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="The Corporate Affairs Logo"
              width={105}
              height={34}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-nav" role="button"  tabIndex={0}>
          <i className="mobile-nav-icon" data-aos="fade-down"></i>
          <span className="visually-hidden">Menu</span>
        </div>

        {/* Main Menu */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist scroll-nav local-scroll">
            {[
              { name: "Home", path: "/" },
              { name: "News", path: "/news" },
              { name: "About", path: "/who" },
              { name: "Services", path: "/services" },
              { name: "Resources", path: "/resources" },
              { name: "FOI", path: "/foi" },
              { name: "FAQs", path: "/fqs" },
            ].map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className={pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="items-end clearlist local-scroll">
            <li>
              <a
                href="https://reportgov.ng"
                target="_blank"
                className="opacity-1 no-hover"
              >
                <span className="link-hover-anim underline" data-link-animate="y">
                  ReportGov.ng
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* End Main Menu */}
      </div>
    </nav>
  );
};

export default Header;
