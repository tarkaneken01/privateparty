"use client";

import { usePathname } from "next/navigation";
import BookingNavbar from "@/components/BookingNavbar";

export default function MemberNavbarSwitcher() {
  const pathname = usePathname();
  const hide = pathname?.startsWith("/member/sign-in");
  if (hide) return null;
  return (
    <>
      <BookingNavbar />
      <div className="h-16" />
    </>
  );
}


