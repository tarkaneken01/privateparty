import type { Metadata } from "next";
import BookingNavbar from "@/components/BookingNavbar";

export const metadata: Metadata = {
  title: "Member — Private Party",
};

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <BookingNavbar />
      <div className="pt-16">{children}</div>
    </div>
  );
}


