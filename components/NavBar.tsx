"use client";
import { hamburger, logo } from "@/public";
import Image from "next/image";
import { FC, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  return (
    <nav className="px-12 flex justify-between items-center  bg-[#dbe2f3] py-4 lg:py-5">
      <Image src={logo} alt="logo" />
      {/* Mobile Nav */}
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <Image src={hamburger} alt="hamburger" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader></DrawerHeader>
            <DrawerFooter>
              <Button>Home </Button>
              <Button>About </Button>
              <Button>App Goals </Button>
              <Button>
                <DropdownMenu>
                  <DropdownMenuTrigger> English</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Arabic</DropdownMenuItem>
                    <DropdownMenuItem>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Button>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <ul className="hidden lg:flex lg:justify-between lg:items-center gap-x-24 me-12">
        <li>
          <Link href="#home"> Home </Link>
        </li>
        <li>
          <Link href="#about"> About </Link>
        </li>
        <li>
          <Link href="#goal"> App Goals </Link>
        </li>
        <li className="flex items-center group">
          <DropdownMenu>
            <DropdownMenuTrigger> English</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down transition-all duration-200 group-:rotate-180">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
