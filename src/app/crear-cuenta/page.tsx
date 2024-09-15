import type { Metadata } from "next";
import { FormRegister, BackButton } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Crear cuenta",
};

export default function Register() {
  return (
    <div className="relative w-full flex flex-row items-center justify-center">
      <BackButton />
      <div className="w-1/2 h-screen flex items-center justify-center">
        <FormRegister />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center bg-neutral-800"></div>
    </div>
  );
}
