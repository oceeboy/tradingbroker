"use client";

import { brokername, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 flex cursor-pointer items-center gap-2 "
        >
          <Image
            src={brokername.imgURL}
            width={34}
            height={34}
            alt={brokername.name}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">{brokername.name}</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bankGradient": isActive })}
            >
              <div className="relative flex gap-2 ">
                <Image
                  width={20}
                  height={20}
                  src={item.imgURL}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
