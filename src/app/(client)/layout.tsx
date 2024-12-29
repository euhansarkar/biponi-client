import Cart from "@/components/cart/cart";
import Sidebar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode | React.ReactElement;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center gap-4 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Logo"
              className="h-10 w-10"
            />
          </div>

          {/* Search */}
          <div className="flex flex-1 items-center gap-4 md:max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Find in restaurant"
                className="pl-8"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              English
            </Button>
            <Button variant="outline">Log in</Button>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Enter delivery address
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 container mx-auto gap-6 p-4 overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="hidden md:block flex-shrink-0" />
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
        {/* Cart */}
        <Cart className="hidden lg:block flex-shrink-0" />
      </div>
    </div>
  );
};

export default ClientLayout;
