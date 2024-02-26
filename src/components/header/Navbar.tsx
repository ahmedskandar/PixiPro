"use client";

import React from "react";
import Link from "next/link";
import { NAVLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden bg-customBlue text-white md:block">
      <ul className="flex justify-between max-w-5xl mx-auto">
        {NAVLINKS.map((link) => {
          const isActive = link.route === pathname;
          return (
            <li key={link.route}>
              <Link
                href={link.route}
                className={cn("flex group gap-2 hover:bg-blue-100/30 rounded-lg p-3", {
                  "bg-blue-100/40 cursor-not-allowed hover:bg-blue-100/40":
                    isActive,
                })}
              >
                <Image
                  src={link.icon}
                  alt={link.label + " icon"}
                  width={24}
                  height={24}
                  className={cn('group-hover:brightness-200', {
                    "brightness-200": isActive,
                  })}
                />
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
