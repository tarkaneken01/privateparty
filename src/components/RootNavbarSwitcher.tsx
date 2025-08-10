"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function RootNavbarSwitcher() {
  const pathname = usePathname();
  if (pathname?.startsWith("/member")) {
    return null;
  }
  return <Navbar />;
}


