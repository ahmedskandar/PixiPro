'use client'

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAVLINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="absolute md:hidden top-1/2 transform -translate-y-1/2 right-5">
      <Sheet>
        <SheetTrigger>
          <FontAwesomeIcon icon={faBars} />
        </SheetTrigger>
        <SheetContent className="bg-white h-screen">
          <>
            <div className="flex justify-between">
              <Logo />
              <div className="flex gap-4">
                <UserButton afterSignOutUrl="/" />
                <Link className="h-[32px]" href={""}>
                  <FontAwesomeIcon
                    className="h-[32px] text-customBlue"
                    icon={faMoneyBill}
                  />
                </Link>
              </div>
            </div>
            <nav className="mt-5">
              <ul>
                {NAVLINKS.map((link) => {
                  const isActive = link.route === pathname;
                  return (
                    <li key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "block rounded-lg p-3",
                          {
                            "bg-customBlue text-white": isActive,
                          }
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
