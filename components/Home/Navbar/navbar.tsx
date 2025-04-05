"use client"
import { useState } from "react";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar = () => {
const [showNav, setShowNav] = useState<boolean>(false);
const handleNavOpen = () => setShowNav(true);
const handleNavClose = () => setShowNav(false);

    return (
        <>
            <DesktopNav openNav={handleNavOpen} />
            <MobileNav showNav={showNav} closeNav={handleNavClose} />
        </>
    )
}

export default Navbar;