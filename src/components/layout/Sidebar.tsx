"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useLayout } from "@/store/useLayoutStore";
import { usePathname } from "next/navigation";

interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { sidebar } = useLayout();
  const { open, animate } = sidebar;
  return (
    <>
      <motion.div
        className={cn(
          "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-900 w-[18rem] flex-shrink-0 rounded-tr-xl rounded-br-xl",
          className
        )}
        animate={{ width: animate ? (open ? "288px" : "64px") : "288px" }}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { sidebar, toggleSidebar } = useLayout();
  const { open } = sidebar;
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
        )}
        {...props}
      >
        <div className="flex justify-end z-20 w-full">
          <FaBars
            className="text-neutral-800 dark:text-neutral-200"
            onClick={() => toggleSidebar(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => toggleSidebar(!open)}
              >
                <FaXmark />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { sidebar } = useLayout();
  const { open, animate } = sidebar;
  const pathname = usePathname();

  const currentRoute = pathname.split("/")[2];
  console.log("pathname", currentRoute);
  const currentPath = link.href.split("/")[2];
  console.log("currentPath", currentPath);  
  // const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        `flex items-center justify-start gap-4 group/sidebar p-2 my-1 ${
        currentRoute === currentPath
            ? " bg-neutral-200 dark:bg-neutral-800 rounded-md"
            : "bg-transparent"
        }`,
        className
      )}
      {...props}
    >
      {link.icon}

      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};
