import type { Metadata } from "next";
import BookingNavbar from "@/components/BookingNavbar";

export const metadata: Metadata = {
  title: "Booking — Private Party",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <BookingNavbar />
      <div className="pt-10">{children}</div>
    </div>
  );
}


