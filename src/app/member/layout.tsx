import type { Metadata } from "next";
import MemberNavbarSwitcher from "@/components/MemberNavbarSwitcher";

export const metadata: Metadata = {
  title: "Member — Private Party",
};

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <MemberNavbarSwitcher />
      <div>{children}</div>
    </div>
  );
}


