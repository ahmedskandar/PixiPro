import React from "react";
import Logo from "./Logo";
import ActionButtons from "./ActionButtons";
import Navbar from "./Navbar";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="p-5 border-b-customBlue border-2 relative text-center md:flex bg-blue-100">
        <Logo />
        <SignedIn>
          <ActionButtons />
          <MobileMenu />
        </SignedIn>
        <SignedOut>
          <Link className="flex gap-2" href={"/sign-in"}>
            <span>Login</span>
            <FontAwesomeIcon icon={faSignIn} />
          </Link>
        </SignedOut>
      </div>
      <SignedIn>
        <Navbar />
      </SignedIn>
    </header>
  );
};

export default Header;
