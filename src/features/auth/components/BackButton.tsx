"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      className="absolute top-4 left-4"
      variant="outline"
      onClick={() => router.push("/")}
    >
      <FaArrowLeft className="h-4 w-4" />
    </Button>
  );
};
