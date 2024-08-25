"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { brokername, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { HambergerMenu } from "iconsax-react";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <HambergerMenu size="32" color="#344054" />
        </SheetTrigger>
        <SheetContent side="left" className=" border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 px-4 "
          >
            <Image
              src={brokername.imgURL}
              width={34}
              height={34}
              alt="Ocee Bank"
            />
            <h1 className="text-26 font-bold font-ibm-plex-serif text-black-1">
              {brokername.name}
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(" mobilenav-sheet_close", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                        <Image
                          width={20}
                          height={20}
                          src={item.imgURL}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                        <p
                          className={cn(" text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                User
              </nav>
            </SheetClose>
            Footer
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
