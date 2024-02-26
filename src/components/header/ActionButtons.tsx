"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

const ActionButtons = () => {
  return (
    <>
      <div className="md:ml-auto gap-5 md:flex hidden">
        <div className="flex flex-col gap-1 items-center">
          <UserButton afterSignOutUrl="/" />
          <span className=" text-xs">Profile</span>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <Link className="h-[32px]" href={""}>
            <FontAwesomeIcon
              className="h-[32px] text-customBlue"
              icon={faMoneyBill}
            />
          </Link>
          <span className="text-xs">Buy credits</span>
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
