"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useLayout } from "@/store/useLayoutStore";

export const LogoutButton = () => {
  const router = useRouter();
  const { sidebar } = useLayout();
  const { open } = sidebar;

  return (
    <Button
      variant="secondary"
      className="w-full space-x-2"
      onClick={() => router.push("/")}
    >
      <span>
        <FaArrowLeft />
      </span>
      {open && <span className="text-xs font-normal">Cerrar sesión</span>}
    </Button>
  );
};
