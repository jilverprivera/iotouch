import { FaBoxesStacked, FaDiagramProject, FaMicrochip, FaPlug, FaServer } from "react-icons/fa6";

export const PRIVATE_PAGES = [
  {
    label: "Dashboard",
    href: "/in/dashboard",
    icon: (
      <FaServer className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Proyectos",
    href: "/in/proyectos",
    icon: (
      <FaDiagramProject className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Areas",
    href: "/in/areas",
    icon: (
      <FaBoxesStacked className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Controladores",
    href: "/in/controladores",
    icon: (
      <FaMicrochip className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Dispositivos",
    href: "/in/dispositivos",
    icon: (
      <FaPlug className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];
