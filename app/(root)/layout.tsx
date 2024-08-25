import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { LoggedIn } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full flex h-screen font-inter">
      <Sidebar user={LoggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center gap-2 px-4 "
          >
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          </Link>
          <MobileNav user={LoggedIn} />
        </div>
        {children}
      </div>
    </main>
  );
}
