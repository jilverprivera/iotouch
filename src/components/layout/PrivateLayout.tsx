"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLayout } from "@/store/useLayoutStore";
import { PRIVATE_PAGES } from "@/helpers/dummy-data/private-pages";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  FaArrowLeft,
  FaDeleteLeft,
  FaDownLeftAndUpRightToCenter,
  FaUpRightAndDownLeftFromCenter,
} from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";
import { LogoutButton } from "./LogoutButton";

export function PrivateLayout({ children }: { children: React.ReactNode }) {
  const { sidebar, toggleSidebar } = useLayout();
  const { open } = sidebar;

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-950 w-full flex-1 mx-auto  overflow-hidden min-h-screen"
      )}
    >
      <Sidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div
              className={`flex items-center ${
                open
                  ? " flex-row justify-between"
                  : "flex-col justify-center space-y-2"
              }`}
            >
              {open ? <Logo /> : <LogoIcon />}
              {!open ? (
                <span
                  onClick={() => toggleSidebar(true)}
                  className="p-1 cursor-pointer"
                >
                  <FaUpRightAndDownLeftFromCenter className="text-xs" />
                </span>
              ) : (
                <span
                  onClick={() => toggleSidebar(false)}
                  className="p-1 cursor-pointer"
                >
                  <FaDownLeftAndUpRightToCenter className="text-base" />
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {PRIVATE_PAGES.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>

            <div
              className={`absolute bottom-0 left-0 w-full flex flex-col items-center justify-start p-2 rounded-lg space-y-2 ${
                open ? "border" : "border-0"
              }`}
            >
              {open && (
                <div className="w-full flex flex-row items-center justify-start space-x-2">
                  <Image
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-lg"
                    width={64}
                    height={64}
                    alt="Avatar"
                  />
                  <p className="text-xs">Jilver Pacheco Rivera</p>
                </div>
              )}

              <LogoutButton />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="m-4 p-2 w-full border border-neutral-900 rounded-xl">
        {children}
      </main>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="/in/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-8 w-8 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        IoTouch
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/in/dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-8 w-8 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// // Dummy dashboard component with content
// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="p-2 md:p-12  flex flex-col gap-2 flex-1 w-full h-full">
//         <div className="flex gap-2">
//           {[...new Array(4)].map((i) => (
//             <div
//               key={"first-array" + i}
//               className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//         <div className="flex gap-2 flex-1">
//           {[...new Array(2)].map((i) => (
//             <div
//               key={"second-array" + i}
//               className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
