"use client"

import { FloatingDock } from "./FloatingDock";

import Image from "next/image";
import { FaPenToSquare, FaPlus } from "react-icons/fa6";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Añadir Controlador",
      icon: (
        <FaPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    // {
    //   title: "Añadir dispositivo",
    //   icon: (
    //     <FaPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    {
      title: "Editar dispositivo",
      icon: (
          <FaPenToSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <Image
    //       src="https://assets.aceternity.com/logo-dark.png"
    //       width={20}
    //       height={20}
    //       alt="Aceternity Logo"
    //     />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "Changelog",
    //   icon: (
    //     <FaPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    // {
    //   title: "Twitter",
    //   icon: (
    //     <FaPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "GitHub",
    //   icon: (
    //     <FaPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
  ];
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
