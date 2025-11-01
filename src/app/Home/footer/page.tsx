
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const currentYear = new Date().getFullYear(); // gets the actual year dynamically

  return (
    <footer className="bg-[#f7f4fa] text-gray-700 py-8 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-6 mb-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
           <Link href="/">
             <Image
              src="/Group 1.png"
              alt="Brand Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className=" font-manrope   font-semibold mb-2 text-[#1A1A1A]">Quick links</h3>
            <ul className="space-y-1 font-manrope font-normal text-[#6E6E6EB2]">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">How it works</Link></li>
              <li><Link href="#">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className=" font-manrope  font-semibold mb-2 text-[#1A1A1A]">Contact</h3>
            <ul className="space-y-1 font-manrope font-normal text-[#6E6E6EB2]">
              <li>+234 000 000 0000</li>
              <li>
                <a href="mailto:DC@emailaddress.com.ng">
                  DC@emailaddress.com.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-sm text-gray-500 flex flex-col md:flex-row justify-between">
        <div className="space-x-4">
          <Link href="#">Legal</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms of Services</Link>
        </div>
        <p className="mt-2 md:mt-0">
          © {currentYear} Icons with Arklind Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
