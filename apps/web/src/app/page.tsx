"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/Navigation";

export function PhotoboothNavbar() {
  return (
    <div className="border-b border-yellow-500/50 bg-gray-950 shadow-xl">
      {" "}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-black tracking-wider text-yellow-400">
            {" "}
            Photo<span className="text-white">Booth</span>
          </div>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/products"
                className={`${navigationMenuTriggerStyle()} 
                            text-white font-medium 
                            hover:bg-yellow-500/10 hover:text-yellow-400 
                            focus:bg-yellow-500/10 focus:text-yellow-400`}
              >
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                className={`${navigationMenuTriggerStyle()} 
                            text-white font-medium 
                            hover:bg-yellow-500/10 hover:text-yellow-400 
                            focus:bg-yellow-500/10 focus:text-yellow-400`}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/gallery"
                className={`${navigationMenuTriggerStyle()} 
                            text-white font-medium 
                            hover:bg-yellow-500/10 hover:text-yellow-400 
                            focus:bg-yellow-500/10 focus:text-yellow-400`}
              >
                Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/gallery"
                className={`${navigationMenuTriggerStyle()} 
                            text-white font-medium 
                            hover:bg-yellow-500/10 hover:text-yellow-400 
                            focus:bg-yellow-500/10 focus:text-yellow-400`}
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ส่วนสำหรับ Mobile Menu */}
        <button className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"></button>
      </div>
    </div>
  );
}

export default PhotoboothNavbar;
