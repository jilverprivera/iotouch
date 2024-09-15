import type { Metadata } from "next";
import { FormLogin, BackButton } from "@/features/auth/components";

export const metadata: Metadata = {
  title: "Iniciar sesión",
};

export default function Login() {
  return (
    <div className="relative w-full flex flex-row items-center justify-center">
      <BackButton />
      <div className="w-1/2 h-screen flex items-center justify-center">
        <FormLogin />
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center bg-neutral-800"></div>
    </div>
  );
}
